class ListarAlertas {
     constructor({ alertaDAO }) {
          this.alertaDAO = alertaDAO
     }

     ejecutar = async () => {
          return await this.alertaDAO.listar()
     }
}

export default ListarAlertas