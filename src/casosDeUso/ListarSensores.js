class ListarSensores {
     constructor({ sensorDAO }) {
          this.sensorDAO = sensorDAO
     }

     ejecutar = async () => {
          return await this.sensorDAO.listar()
     }
}

export default ListarSensores