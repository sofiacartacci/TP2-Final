class SensorController {
     constructor({ listarSensores }) {
          this.listarSensores = listarSensores
     }

     listar = async (req, res, next) => {
          try {
               const sensores = await this.listarSensores.ejecutar()
               res.status(200).json(sensores.map((sensor) => sensor.toJSON()))
          } catch (error) {
               next(error)
          }
     }
}

export default SensorController