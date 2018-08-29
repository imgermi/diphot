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
          <p>Nuestra "pre-ocupación" por la calidad en los procesos y procedimientos que ofrecemos, nos ha llevado, por propia iniciativa, a requerir la certificación del Sistema de Calidad ISO, recorriendo las distintas instancias que la Norma fue actualizando. Iniciamos con la ISO  9001:1994, luego 9001:2000, después 9001:2008  y finalmente hace un año certificamos bajo la Norma ISO 9001: 2015 para el "Diseño, Desarrollo, Comercialización, Provisión, Instalación y Operación de Sistemas de Identificación de Personas y/u Objetos y Soluciones Integrales de Sistemas".</p>
          <p>Nuestras propias oficinas, en el centro geográfico de la Ciudad de Buenos Aires, es el continente que permite a las personas que trabajamos en Diphot generar con espíritu innovador, aplicativos y soluciones que se nos requieren, aplicando conceptos simples pero rigurosos: seguridad, calidad, identificación, innovación y creatividad.</p>
          <p>Nuestros profesionales, capacitados en usos de la nube y lenguajes de última generación, pueden brindar las soluciones que se les requieran, con una visión de la arquitectura que puede ir creciendo con nuevas iniciativas en función de las experiencias obtenidas y con una impronta liminar de seguridad, para cuidar la privacidad, factor que cada día cobra mayor importancia.</p>
          <p>En Diphot acompañamos a nuestros clientes a lo largo de la implementación y aplicación de nuestras herramientas tecnológicas. Capacitamos a las personas que utilizan nuestros servicios y/o productos.</p>
          <p>Integral significa comprometernos a lo largo de todo un proceso.</p>
        </article>
      </div>
    </section>

    <section class="banda historia">
      <div class="container">
        <article class="historia__img">
          <img src="~/assets/images/diphot-empresa.jpg" alt="Diphot - Soluciones Informáticas Integrales">
        </article>
        <article class="historia__content">
          <h5>Nuestra historia</h5>
          <p>DiPhot S.A. es una empresa familiar y argentina que viene brindando soluciones al sector público y privado hace 25 años. Está focalizada en ofrecer soluciones innovativas y competitivas. Nuestro Staff de desarrollo permanentemente se actualiza en el uso de nuevas tecnologías. Hemos sido pioneros (1994) en la impresión sobre papel de fotografías digitales en documentos públicos como la Licencia de Conducir. Hemos desarrollado aplicativos para consulta y generación de Bases de Datos desde diversos dispositivos  SmartPhones, Tablets, PCs, etc.</p>
          <p>Nuestro más reciente producto es el de transformar datos en conocimiento  para la toma de decisiones. Aplicamos tecnologías de Big Data, Machine Learning, Data Analytics y BlockChain. Nos propusimos acercar a las PyMEs productos que sólo emplean las grandes empresas.</p>
          <p>Nuestro objetivo es seguir siendo altamente competitivos, ofreciendo soluciones flexibles y de alto rendimiento, demostrando que nuestro país puede usar tecnologías de vanguardia y aprovechar las oportunidades para dar un salto tecnológico.</p>
          <p>En DiPhot S.A., la historia la construimos desde el futuro hacia el presente.</p>
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
      title: 'La Empresa'
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
        { rel: 'canonical', href: 'https://diphot.com/empresa' }
      ]
    }
  },
  components: {
    Contacto
  }
}
</script>