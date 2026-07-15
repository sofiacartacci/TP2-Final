import DAOFactory from "./DAOFactory.js"
import MailServiceFactory from "./MailServiceFactory.js"
import RegistrarLectura from "../casosDeUso/RegistrarLectura.js"
import ListarSensores from "../casosDeUso/ListarSensores.js"
import ListarAlertas from "../casosDeUso/ListarAlertas.js"


class UseCaseFactory {
     static getRegistrarLectura() {
          return new RegistrarLectura({
               sensorDAO: DAOFactory.getSensorDAO(),
               alertaDAO: DAOFactory.getAlertaDAO(),
               mailService: MailServiceFactory.getMailService(),
          })
     }

     static getListarSensores() {
          return new ListarSensores({
               sensorDAO: DAOFactory.getSensorDAO(),
          })
     }

     static getListarAlertas() {
          return new ListarAlertas({
               alertaDAO: DAOFactory.getAlertaDAO(),
          })
     }
}

export default UseCaseFactory