class MailService {
     constructor({ remitente = "alertas@planta-industrial.com" } = {}) {
          this.remitente = remitente
     }

     enviar = async ({ para, asunto, cuerpo }) => {
          console.log(" ─────────── MAIL ENVIADO ─────────── ")
          console.log(`   De:      ${this.remitente}`)
          console.log(`   Para:    ${para}`)
          console.log(`   Asunto:  ${asunto}`)
          console.log(`   Cuerpo:  ${cuerpo}`)
          console.log(" ───────────────────────────────────── ")
          return { enviado: true }
     }
}

export default MailService