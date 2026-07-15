import ValidationError from "../dominio/errores/ValidationError.js"

const errorHandler = (error, req, res, next) => {
     if (error instanceof ValidationError) {
          return res.status(400).json({ errorMsg: error.message })
     }

     if (error instanceof SyntaxError && "body" in error) {
          return res.status(400).json({ errorMsg: "El body no es un JSON valido" })
     }

     console.error(error)
     return res.status(500).json({ errorMsg: "Error interno del servidor" })
}

export default errorHandler