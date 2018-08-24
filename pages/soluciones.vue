  <template>
  <div class="soluciones">

    <section class="top-box">
      <div class="container">
        <h1>Soluciones</h1>
        <h2>Toda solución informática conjuga innovación, creatividad y una estrategia efectiva.</h2>
<!--         <div class="secondary-nav-container">
          <div class='secondary-nav'>
            <ul>
              <li><a href="#sistema-de-fidelizacion">Sistema de Fidelización</a></li>
              <li><a href="#emision-de-documentos">Emisión de Documentos</a></li>
              <li><a href="#sistema-de-turnos-online">Sistema de Turnos Online</a></li>
              <li><a href="#turnero-totem">Turnero-Totem</a></li>
              <li><a href="#data-analytics-machine-learning">Data Analytics & Meaching Learning</a></li>
              <li><a href="#rfid">RFID</a></li>
            </ul>
          </div>
        </div> -->
      </div>
      <img class="diphot-arrows" src="~/assets/images/icons/diphot-arrows.svg">
    </section>

    <section class="banda">
      
      <article class="solucion" id="sistema-de-fidelizacion">
        <div class="container">
          <div class="solucion__img">
            <span>01</span>
            <div>
              <img src="~/assets/images/soluciones/sistema-fidelizacion.jpg" alt="Sistema de Fidelización">
            </div>
          </div>
          <div class="solucion__text">
            <h5>Sistema de Fidelización</h5>
            <p>Desarrollamos un sistema a medida para tu Negocio, con las últimas tecnologías informáticas.  El sistema se complementa con una tarjeta (física o virtual) que permite premiar a tus Clientes por las compras realizadas.  Por cada venta, los clientes suman puntos y pueden consultar qué tipo de promociones y/o descuentos pueden obtener.</p>
          </div>
        </div>
      </article>

      <article class="solucion" id="emision-de-documentos">
        <div class="container">
          <div class="solucion__img">
            <span>02</span>
            <div>
              <img src="~/assets/images/soluciones/emision-documentos.jpg" alt="Emisión de Documentos">
            </div>
          </div>
          <div class="solucion__text">
            <h5>Emisión de Documentos</h5>
            <p>Brindamos un <strong>Sistema Integral Informático</strong> que permite identificar de manera rápida y segura a las personas, almacenando toda su información, personal y biométrica, en una BBDD.  El análisis de estos datos permite obtener información útil y conocimiento para la gestión y toma de decisiones. Desde 1994 proveemos este servicio a Municipios del Gran Buenos Aires.</p>
          </div>
        </div>
      </article>

      <article class="solucion" id="sistema-de-turnos-online">
        <div class="container">
          <div class="solucion__img">
            <span>03</span>
            <div>
              <img src="~/assets/images/soluciones/turnos.jpg" alt="Sistema de Turnos Online">
            </div>
          </div>
          <div class="solucion__text">
            <h5>Sistema de Turnos Online</h5>
            <p>Un servicio adaptable a diferentes tipos de áreas para optimizar tiempos y mejorar procesos en la atención de los clientes. Cada cliente puede elegir un turno “on line”, según su conveniencia y disponibilidad y confirmarlo en  forma inmediata. Se genera una BBDD con e-mails validados. Es un sistema adaptable a cualquier actividad: profesionales, Organismos, Bancos, Centros de Salud, etc.</p>
          </div>
        </div>
      </article>

      <article class="solucion" id="turnero-totem">
        <div class="container">
          <div class="solucion__img">
            <span>04</span>
            <div>
              <img src="~/assets/images/soluciones/totem.jpg" alt="Turnero-Totem">
            </div>
          </div>
          <div class="solucion__text">
            <h5>Turnero-Totem</h5>
            <p>Es un Sistema de Autoconsulta para ordenar el flujo de atención a clientes, optimizando los tiempos de espera. Permite tener información muy útil para la gestión interna de una Organización o Entidad gubernamental.</p>
          </div>
        </div>
      </article>

      <article class="solucion" id="data-analytics-machine-learning">
        <div class="container">
          <div class="solucion__img">
            <span>05</span>
            <div>
              <img src="~/assets/images/soluciones/machine-data.jpg" alt="Data Analytics & Machine Learning">
            </div>
          </div>
          <div class="solucion__text">
            <h5>Data Analytics & Machine Learning</h5>
            <p>Desde el 2014 nos enfocamos en desarrollar una plataforma de Biga Data y Data Analytics , usando BBDD no relacionales, libre de licencias.</p>
            <p>De la misma forma hemos desarrollado Micro Servicios e incursionado en Machine Learning y BlockChain con desarrollos que se nutren con los productos que son nuestra experiencia de casi 25 años.</p>
          </div>
        </div>
      </article>

      <article class="solucion" id="rfid">
        <div class="container">
          <div class="solucion__img">
            <span>06</span>
            <div>
              <img src="~/assets/images/soluciones/rfid.jpg" alt="RFID">
            </div>
          </div>
          <div class="solucion__text">
            <h5>RFID</h5>
            <p>Esta tecnología ayuda a la identificación unívoca y automática sin contacto, permitiendo en una multiplicidad de aplicaciones, la acreditación e individualización, localización y/o el monitoreo de personas, mercaderías, y objetos, y/o animales.</p>
          </div>
        </div>
      </article>

    </section>

    <contacto/>

  </div>
</template>

<script>
import Contacto from '~/components/Contacto.vue'

export default {
  data () {
    return {
      title: 'Nuestras Soluciones'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'keywords', name: 'keywords', content: 'informática, soluciones, documentos, digital, tecnología, electrónica, licencias, identificaciones, acreditación, tracking, tarjeta, card, top card, rfid, radiofrecuencia, soluciones integrales para empresas, firma digital, empresas, software, hardware, bases de datos, seguridad documental, encriptado, cifrado, transacciones informáticas, certificación, visa, Euro pay, MasterCard' }
      ],
      link: [
        { rel: 'canonical', href: 'http://diphot.com/soluciones/' }
      ]
    }
  },
  components: {
    Contacto
  }
}
</script>
