import UseCaseFactory from "./UseCaseFactory.js"
import LecturaController from "../controladores/LecturaController.js"
import SensorController from "../controladores/SensorController.js"
import AlertaController from "../controladores/AlertaController.js"

let lecturaController = null
let sensorController = null
let alertaController = null

class ControllerFactory {
     static getLecturaController() {
          if (!lecturaController) {
               lecturaController = new LecturaController({
                    registrarLectura: UseCaseFactory.getRegistrarLectura(),
               })
          }
          return lecturaController
     }

     static getSensorController() {
          if (!sensorController) {
               sensorController = new SensorController({
                    listarSensores: UseCaseFactory.getListarSensores(),
               })
          }
          return sensorController
     }

     static getAlertaController() {
          if (!alertaController) {
               alertaController = new AlertaController({
                    listarAlertas: UseCaseFactory.getListarAlertas(),
               })
          }
          return alertaController
     }
}

export default ControllerFactory