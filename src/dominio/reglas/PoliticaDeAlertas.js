const REGLAS = {
     TEMPERATURA: {
          superaUmbral: (valor) => valor > 35,
          mensaje: "TEMPERATURA alta",
     },
     HUMEDAD: {
          superaUmbral: (valor) => valor < 20,
          mensaje: "HUMEDAD baja",
     },
     CO2: {
          superaUmbral: (valor) => valor > 1000,
          mensaje: "CO2 alto",
     },
}

class PoliticaDeAlertas {
     static evaluar(lectura) {
          const regla = REGLAS[lectura.tipo]
          if (!regla) return null
          return regla.superaUmbral(lectura.valor) ? regla.mensaje : null
     }
}

export default PoliticaDeAlertas