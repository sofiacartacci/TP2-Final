import { Router } from "express"
import ControllerFactory from "../factories/ControllerFactory.js"

const routes = Router()

const lecturaController = ControllerFactory.getLecturaController()
const sensorController = ControllerFactory.getSensorController()
const alertaController = ControllerFactory.getAlertaController()

routes.post("/lecturas", lecturaController.registrar)
routes.get("/sensores", sensorController.listar)
routes.get("/alertas", alertaController.listar)

export default routes