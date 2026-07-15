class AlertaDAOMemoria {
     #alertas = new Map() // sensorId -> Alerta

     guardar = async (alerta) => {
          this.#alertas.set(alerta.sensorId, alerta)
          return alerta
     }

     eliminarPorSensor = async (sensorId) => {
          return this.#alertas.delete(sensorId)
     }

     listar = async () => {
          return [...this.#alertas.values()]
     }
}

export default AlertaDAOMemoria