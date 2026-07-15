import Lectura from "../dominio/modelos/Lectura.js"
import Sensor from "../dominio/modelos/Sensor.js"
import Alerta from "../dominio/modelos/Alerta.js"
import PoliticaDeAlertas from "../dominio/reglas/PoliticaDeAlertas.js"

class RegistrarLectura {
     constructor({ sensorDAO, alertaDAO, mailService }) {
          this.sensorDAO = sensorDAO
          this.alertaDAO = alertaDAO
          this.mailService = mailService
     }

     ejecutar = async (datos) => {
          const lectura = new Lectura(datos)

          let sensor = await this.sensorDAO.buscarPorId(lectura.id)
          const esNuevo = sensor === null

          if (esNuevo) {
               sensor = Sensor.desdeLectura(lectura)
          } else {
               sensor.actualizarCon(lectura)
          }
          await this.sensorDAO.guardar(sensor)

          const mensaje = PoliticaDeAlertas.evaluar(lectura)

          if (mensaje) {
               const alerta = Alerta.desdeLectura(lectura, mensaje)
               await this.alertaDAO.guardar(alerta)
               await this.#notificar(alerta)
          } else {
               await this.alertaDAO.eliminarPorSensor(sensor.id)
          }

          return { sensor, alerta: mensaje, esNuevo }
     }
     #notificar = async (alerta) => {
          try {
               await this.mailService.enviar({
                    para: "mantenimiento@planta-industrial.com",
                    asunto: `Alerta: ${alerta.mensaje} en sensor ${alerta.sensorId}`,
                    cuerpo: `El sensor ${alerta.sensorId} (${alerta.tipo}) registro un valor de ${alerta.valor} el ${alerta.timestamp}.`,
               })
          } catch (error) {
               console.error("No se pudo enviar el mail de alerta:", error.message)
          }
     }
}

export default RegistrarLectura