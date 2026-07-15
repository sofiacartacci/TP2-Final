class ValidationError extends Error {
     constructor(mensaje) {
          super(mensaje)
          this.name = "ValidationError"
     }
}

export default ValidationError