<template>
  <div class="index">

    <section class="top-box">
      <div class="container">
        <h1>Somos DiPhot</h1>
        <h2>Brindamos soluciones informáticas integrales</h2>
      </div>
    </section>

    <section class="servicios-container">
      <div class="container">
        <div class="servicios-container-flex">
          <nuxt-link to="/" class="servicio">
            <h3>Emisión de documentos</h3>
            <h4>Nuestros principales proyectos de seguridad documental se apoyan e la generación de licencias de conducir, libretas sanitarias y otras identificaciones.</h4>
          </nuxt-link>
          <nuxt-link to="/" class="servicio">
            <h3>Firma digital</h3>
            <h4>Mediante el máximo nivel de seguridad en transacciones informáticas, la firma digital permite realizar trámites virtuales a distancia, a través de mensajes cifrados.</h4>
          </nuxt-link>
          <nuxt-link to="/" class="servicio">
            <h3>Identificación por <br> radiofrecuencia</h3>
            <h4>La tecnología RFID ayuda a la identificación automática sin contacto, permitiendo la acreditación e de personas, objetos, mercaderías y otros tipos de insumos.</h4>
          </nuxt-link>
          <nuxt-link to="/" class="servicio">
            <h3>OTP Card</h3>
            <h4>Una tarjeta personalizada que genera una password de 6 dígitos para ser verificada en un lapso breve. Reemplaza al token, brindando un mayor nivel de seguridad en la autenticación para accesos online.</h4>
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

