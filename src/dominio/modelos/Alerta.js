class Alerta {
     constructor({ sensorId, tipo, valor, timestamp, mensaje }) {
          this.sensorId = sensorId
          this.tipo = tipo
          this.valor = valor
          this.timestamp = timestamp
          this.mensaje = mensaje
     }

     static desdeLectura(lectura, mensaje) {
          return new Alerta({
               sensorId: lectura.id,
               tipo: lectura.tipo,
               valor: lectura.valor,
               timestamp: lectura.timestamp,
               mensaje,
          })
     }

     toJSON() {
          return {
               id: this.sensorId,
               tipo: this.tipo,
               valor: this.valor,
               timestamp: this.timestamp,
               alerta: this.mensaje,
          }
     }
}

export default Alerta