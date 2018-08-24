<template>
  <div class="contacto">

    <section class="top-box">
      <div class="container">
        <h1>Contacto</h1>
        <h2>Envíe su contacto para que podamos brindarle la solución más adecuada a su empresa.</h2>
      </div>
      <img class="diphot-arrows" src="~/assets/images/icons/diphot-arrows.svg">
    </section>

    <section class="banda contacto">
      <div class="container">
        <div class="contacto-flex">
          <a class="contacto__item" href="mailto:administracion@diphot.com">
            <div class="icon">
              <img src="~/assets/images/icons/administracion.svg">
            </div>
            <p>Área administrativo contable</p>
            <span>administracion@diphot.com</span>
          </a>
          <a class="contacto__item" href="mailto:mkt@diphot.com">
            <div class="icon">
              <img src="~/assets/images/icons/comercial.svg">
            </div>
            <p>Área comercial</p>
            <span>mkt@diphot.com</span>
          </a> 
          <a class="contacto__item" href="mailto:sistemas@diphot.com">
            <div class="icon">
              <img src="~/assets/images/icons/sistemas.svg">
            </div>
            <p>Área de sistemas</p>
            <span>sistemas@diphot.com</span>
          </a> 
          <a class="contacto__item" href="mailto:info@diphot.com">
            <div class="icon">
              <img src="~/assets/images/icons/directivos.svg">
            </div>
            <p>Directivos</p>
            <span>info@diphot.com</span>
          </a>  
        </div>
      </div>
    </section>

    <section class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5621591496806!2d-58.44251748509029!3d-34.615231580456474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3ff13a3223%3A0x5dc8128b6129a91f!2sAv.+Dr.+Honorio+Pueyrred%C3%B3n+365%2C+C1405BAA+CABA!5e0!3m2!1sen!2sar!4v1515605298517" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Contacto'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Envíe su contacto para que podamos brindarle la solución más adecuada para su empresa.' },
        { hid: 'keywords', name: 'keywords', content: 'informática, soluciones, documentos, digital, tecnología, electrónica, licencias, identificaciones, acreditación, tracking, tarjeta, card, top card, rfid, radiofrecuencia, soluciones integrales para empresas, firma digital, empresas, software, hardware, bases de datos, seguridad documental, encriptado, cifrado, transacciones informáticas, certificación, visa, Euro pay, MasterCard' }
      ],
      link: [
        { rel: 'canonical', href: 'http://diphot.com/contacto/' }
      ]
    }
  }
}
</script>