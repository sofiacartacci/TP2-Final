import express from "express"
import routes from "./src/rutas/routes.js"
import errorHandler from "./src/middlewares/errorHandler.js"
import notFoundHandler from "./src/middlewares/notFoundHandler.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", routes)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(8000, () => {
     console.log(`🚀 ~ 8000`)
})