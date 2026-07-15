import MailService from "../servicios/MailService.js"

let mailService = null

class MailServiceFactory {
     static getMailService() {
          if (!mailService) mailService = new MailService()
          return mailService
     }
}

export default MailServiceFactory