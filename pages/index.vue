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
            <h4>Desarrollamos un sistema a medida para tu Negocio, con las últimas tecnologías informáticas.</h4>
          </nuxt-link>
          <nuxt-link to="/soluciones#emision-de-documentos" class="servicio">
            <h3>Emisión de Documentos</h3>
            <h4>Brindamos un Sistema Integral Informático que permite identificar de manera rápida y segura a las personas.</h4>
          </nuxt-link>
          <nuxt-link to="/soluciones#sistema-de-turnos-online" class="servicio">
            <h3>Sistema de Turnos Online</h3>
            <h4>Un servicio adaptable a diferentes tipos de áreas para optimizar tiempos y mejorar procesos en la atención de los clientes.</h4>
          </nuxt-link>
          <nuxt-link to="/soluciones#turnero-totem" class="servicio">
            <h3>Turnero-Totem</h3>
            <h4>Sistema de Autoconsulta para ordenar el flujo de atención a clientes, optimizando los tiempos de espera.</h4>
          </nuxt-link>
        </div>
        <nuxt-link to="/soluciones" class="filled-btn orange">Ver todas las soluciones</nuxt-link>
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