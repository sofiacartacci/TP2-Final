class LecturaController {
     constructor({ registrarLectura }) {
          this.registrarLectura = registrarLectura
     }

     registrar = async (req, res, next) => {
          try {
               const { sensor, alerta, esNuevo } = await this.registrarLectura.ejecutar(req.body)
               res.status(esNuevo ? 201 : 200).json({ ...sensor.toJSON(), alerta })
          } catch (error) {
               next(error) 
          }
     }
}

export default LecturaController