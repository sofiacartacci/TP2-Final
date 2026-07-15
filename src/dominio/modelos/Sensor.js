import ValidationError from "../errores/ValidationError.js"

class Sensor {
     constructor({ id, tipo, valor, timestamp }) {
          this.id = id
          this.tipo = tipo
          this.valor = valor
          this.timestamp = timestamp
     }

     static desdeLectura(lectura) {
          return new Sensor({
               id: lectura.id,
               tipo: lectura.tipo,
               valor: lectura.valor,
               timestamp: lectura.timestamp,
          })
     }

     actualizarCon(lectura) {
          if (lectura.id !== this.id) {
               throw new ValidationError("La lectura no corresponde a este sensor")
          }
          this.tipo = lectura.tipo
          this.valor = lectura.valor
          this.timestamp = lectura.timestamp
          return this
     }

     toJSON() {
          return {
               id: this.id,
               tipo: this.tipo,
               valor: this.valor,
               timestamp: this.timestamp,
          }
     }
}

export default Sensor