class SensorDAOMemoria {
     #sensores = new Map()

     guardar = async (sensor) => {
          this.#sensores.set(sensor.id, sensor)
          return sensor
     }

     buscarPorId = async (id) => {
          return this.#sensores.get(id) ?? null
     }

     listar = async () => {
          return [...this.#sensores.values()]
     }
}

export default SensorDAOMemoria