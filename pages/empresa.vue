<template>
  <div class="empresa">

    <section class="top-box">
      <div class="container">
        <h1>Empresa</h1>
        <h2>Un sinónimo de innovación en soluciones informáticas integrales</h2>
      </div>
      <img class="diphot-arrows" src="~/assets/images/icons/diphot-arrows.svg">
    </section>

    <section class="banda intro">
      <div class="container">
        <article class="p-container">
          <p>Nuestra “pre-ocupación” por la calidad en los procesos y procedimientos que ofrecemos, nos ha llevado, por propia iniciativa, a requerir la certificación del Sistema de Calidad ISO, recorriendo las distintas instancias que la norma fue actualizando. Nuestra primera certificación en nuestros inicios fue la 9001:1994, luego 9001:2000 y desde hace un año estamos certificados por RINA e IQNet bajo la norma ISO 9001:2008 para el “Diseño, Desarrollo, Provisión, Instalación y Operación de Sistemas de Identificación de Personas y Documentos”.</p>
          <p>Nuestras propias oficinas, en el centro geográfico de la Ciudad de Buenos Aires, es el continente que permite a las personas que trabajamos en Diphot generar con espíritu innovador las soluciones que se nos requieren, aplicando conceptos simples pero rigurosos: seguridad, calidad, identificación, innovación y perseverancia. Con estos conceptos hemos logrado aplicativos para que el personal que atiende los servicios, pueda concentrarse en la operación y la atención al ciudadano y brindar lo mejor de ellos en cada momento.</p>
          <p>En Diphot acompañamos a nuestros clientes a lo largo de la implementación y aplicación de nuestras herramientas tecnológicas. Capacitamos a las personas que utilizan nuestros servicios y/o productos, proveyendo de todos los insumos que sean requeridos para su ejecución.</p>
          <p>Porque integral significa comprometernos a lo largo de todo un proceso.</p>
        </article>
      </div>
    </section>

    <section class="banda historia">
      <div class="container">
        <article class="historia__img"></article>
        <article class="historia__content">
          <h5>Nuestra historia</h5>
          <p>Diphot es una empresa argentina que viene brindando soluciones integrales al sector público y privado, focalizada en ofrecer soluciones innovativas y buscando la aplicación de tecnologías de última generación a precios razonables y competitivos. Diphot ha sido pionera (hace 16 años) en la impresión sobre papel de fotografías digitales en documentos públicos y privados, ha introducido en la argentina la tecnología RFID y soluciones de Firma Digital/Electrónica y sus requerimientos complementarios, y más recientemente, las nuevas tarjetas de Crédito/Débito con display: OTP Cards. Hemos desarrollado aplicativos para consulta y generación de Bases de Datos desde SmartPhones y aplicativos de Estacionamiento medido con celulares comunes integrando a cuidadores de estacionamiento. Nuestro más reciente producto es la transmisión de contenidos audiovisuales por Internet a LCDs distribuidos en espacios públicos y privados de acceso público, mediante un aplicativo de nuestro desarrollo llamado TVnet.</p>
          <p>Nuestro objetivo es seguir siendo altamente competitivos, ofreciendo soluciones flexibles y de alto rendimiento, demostrando que nuestro país puede usar tecnologías de vanguardia y aprovechar las oportunidades para dar un salto tecnológico.</p>
          <p>En Diphot, la historia la construimos desde el futuro hacia el presente.</p>
        </article>
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
      title: 'Empresa'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Somos expertos en tecnología preocupados por la calidad y los procesos, comprometidos con la aplicación de tecnologías de vanguardia.' },
        { hid: 'keywords', name: 'keywords', content: 'informática, soluciones, documentos, digital, tecnología, electrónica, licencias, identificaciones, acreditación, tracking, tarjeta, card, top card, rfid, radiofrecuencia, soluciones integrales para empresas, firma digital, empresas, software, hardware, bases de datos, seguridad documental, encriptado, cifrado, transacciones informáticas, certificación, visa, Euro pay, MasterCard' }
      ],
      link: [
        { rel: 'canonical', href: 'http://diphot.com/empresa/' }
      ]
    }
  },
  components: {
    Contacto
  }
}
</script>