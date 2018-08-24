<template>
  <div class="index">
    <section class="top-box">
      <div class="container">
        <h1><span>Somos</span> <span class="word" id="word"></span></h1>
        <h2>Brindamos soluciones informáticas integrales</h2>
      </div>
    </section>

    <section class="servicios-container">
      <div class="container">
        <div class="servicios-container-flex">
          <nuxt-link to="/soluciones#sistema-de-fidelizacion" class="servicio">
            <h3>Sistema de Fidelización</h3>
            <h4>Desarrollamos un sistema a medida para tu Negocio, con las últimas tecnologías informáticas.  El sistema se complementa con una tarjeta (física o virtual) que permite premiar a tus Clientes por las compras realizadas.  Por cada venta, los clientes suman puntos y pueden consultar qué tipo de promociones y/o descuentos pueden obtener.</h4>
          </nuxt-link>
          <nuxt-link to="/soluciones#emision-de-documentos" class="servicio">
            <h3>Emisión de Documentos</h3>
            <h4>Brindamos un Sistema Integral Informático que permite identificar de manera rápida y segura a las personas, almacenando toda su información, personal y biométrica, en una BBDD.  El análisis de estos datos permite obtener información útil y conocimiento para la gestión y toma de decisiones. Desde 1994 proveemos este servicio a Municipios del Gran Buenos Aires.</h4>
          </nuxt-link>
          <nuxt-link to="/soluciones#sistema-de-turnos-online" class="servicio">
            <h3>Sistema de Turnos Online</h3>
            <h4>Un servicio adaptable a diferentes tipos de áreas para optimizar tiempos y mejorar procesos en la atención de los clientes. Cada cliente puede elegir un turno “on line”, según su conveniencia y disponibilidad y confirmarlo en  forma inmediata. Se genera una BBDD con e-mails validados. Es un sistema adaptable a cualquier actividad: profesionales, Organismos, Bancos, Centros de Salud, etc.</h4>
          </nuxt-link>
          <nuxt-link to="/soluciones#turnero-totem" class="servicio">
            <h3>Turnero-Totem</h3>
            <h4>Es un  Sistema de Autoconsulta para ordenar el flujo de atención a clientes, optimizando los tiempos de espera. Permite tener información muy útil para la gestión interna de una Organización o Entidad gubernamental.</h4>
          </nuxt-link>
          <nuxt-link to="/soluciones#data-analytics-machine-learning" class="servicio">
            <h3>Data Analytics & Machine Learning</h3>
            <h4>Desde el 2014 nos enfocamos en desarrollar una plataforma de Biga Data y Data Analytics , usando BBDD no relacionales, libre de licencias. De la misma forma hemos desarrollado Micro Servicios e incursionado en Machine Learning y BlockChain con desarrollos que se nutren con los productos que son nuestra experiencia de casi 25 años.</h4>
          </nuxt-link>
          <nuxt-link to="/soluciones#rfid" class="servicio">
            <h3>RFID</h3>
            <h4>Esta tecnología ayuda a la identificación unívoca y automática sin contacto, permitiendo en una multiplicidad de aplicaciones, la acreditación e individualización, localización y/o el monitoreo de personas, mercaderías, y objetos, y/o animales.</h4>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="empresa banda">
      <div class="container">
        <h5>La empresa</h5>
        <div class="p-container">
          <h6>Somos referentes en la aplicación de tecnologías de vanguardia. Nuestros servicios responden a las necesidades informáticas de un mercado dinámico, creativo y altamente competitivo.</h6>
        </div>
        <nuxt-link to="/empresa" class="filled-btn">Conózcanos</nuxt-link>
      </div>
    </section>

    <contacto/>

  </div>
</template>

<script>
import Contacto from '~/components/Contacto.vue'

export default {
  mounted () {
    var words = ['futuro', 'Diphot', 'soluciones', 'innovación', 'referentes']
    var wordWrapper = document.getElementById('word')
    var wordWrapperContent = wordWrapper.innerHTML
    var addingWord = false
    var counter = 1
    setInterval(function () {
      if (wordWrapperContent.length > 0 && !addingWord) {
        wordWrapper.innerHTML = wordWrapperContent.slice(0, -1)
        wordWrapperContent = wordWrapper.innerHTML
      } else {
        addingWord = true
      }
      if (addingWord) {
        if (wordWrapperContent.length < words[counter].length) {
          wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1)
          wordWrapperContent = wordWrapper.innerHTML
        } else {
          if (counter < words.length) {
            counter++
          }
          addingWord = false
        }
      }
      if (counter === words.length) {
        counter = 0
      }
    }, 150)
  },
  data () {
    return {
      title: 'Soluciones Informáticas Integrales'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Somos un equipo experto en tecnología que brinda soluciones informáticas, innovadoras y confiables. ¡Conózcanos!' },
        { hid: 'keywords', name: 'keywords', content: 'informática, soluciones, documentos, digital, tecnología, electrónica, licencias, identificaciones, acreditación, tracking, tarjeta, card, top card, rfid, radiofrecuencia, soluciones integrales para empresas, firma digital, empresas, software, hardware, bases de datos, seguridad documental, encriptado, cifrado, transacciones informáticas, certificación, visa, Euro pay, MasterCard' }
      ],
      link: [
        { rel: 'canonical', href: 'http://diphot.com/' }
      ]
    }
  },
  components: {
    Contacto
  }
}
</script>