import SensorDAOMemoria from "../dao/SensorDAOMemoria.js"
import AlertaDAOMemoria from "../dao/AlertaDAOMemoria.js"

let sensorDAO = null
let alertaDAO = null

class DAOFactory {
     static getSensorDAO() {
          if (!sensorDAO) sensorDAO = new SensorDAOMemoria()
          return sensorDAO
     }

     static getAlertaDAO() {
          if (!alertaDAO) alertaDAO = new AlertaDAOMemoria()
          return alertaDAO
     }
}

export default DAOFactory