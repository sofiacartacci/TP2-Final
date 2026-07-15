class AlertaController {
     constructor({ listarAlertas }) {
          this.listarAlertas = listarAlertas
     }

     listar = async (req, res, next) => {
          try {
               const alertas = await this.listarAlertas.ejecutar()
               res.status(200).json(alertas.map((alerta) => alerta.toJSON()))
          } catch (error) {
               next(error)
          }
     }
}

export default AlertaController