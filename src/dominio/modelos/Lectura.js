import ValidationError from "../errores/ValidationError.js"

const TIPOS_VALIDOS = ["TEMPERATURA", "HUMEDAD", "CO2"]
const FORMATO_ID = /^[A-Za-z0-9]{8}$/
class Lectura {
     constructor({ id, tipo, valor, timestamp } = {}) {
          this.#validar({ id, tipo, valor, timestamp })
          this.id = id
          this.tipo = tipo
          this.valor = valor
          this.timestamp = timestamp
          Object.freeze(this)
     }

     #validar({ id, tipo, valor, timestamp }) {
          if (typeof id !== "string" || !FORMATO_ID.test(id)) {
               throw new ValidationError(
                    "El id debe ser un string de exactamente 8 caracteres alfanumericos"
               )
          }
          if (!TIPOS_VALIDOS.includes(tipo)) {
               throw new ValidationError(
                    `El tipo debe ser uno de: ${TIPOS_VALIDOS.join(", ")}`
               )
          }
          if (typeof valor !== "number" || !Number.isFinite(valor)) {
               throw new ValidationError("El valor debe ser un numero valido")
          }
          if (typeof timestamp !== "string" || timestamp.trim() === "") {
               throw new ValidationError("El timestamp debe ser un string no vacio")
          }
     }
}

export default Lectura