  <template>
  <div class="soluciones">

    <section class="top-box">
      <div class="container">
        <h1>Soluciones</h1>
        <h2>Toda solución informática conjuga innovación, creatividad y una estrategia efectiva.</h2>
        <div class="secondary-nav-container">
          <div class='secondary-nav'>
            <ul>
              <li><a href="#emision-de-documentos">Emisión de documentos</a></li>
              <li><a href="#firma-digital">Firma digital</a></li>
              <li><a href="#rfid">RFID</a></li>
              <li><a href="#otp-card">OTP Card</a></li>
            </ul>
          </div>
        </div>
      </div>
      <img class="diphot-arrows" src="~/assets/images/icons/diphot-arrows.svg">
    </section>

    <section class="banda">
      
      <article class="solucion" id="emision-de-documentos">
        <div class="container">
          <div class="solucion__img">
            <span>01</span>
            <div></div>
          </div>
          <div class="solucion__text">
            <h5>Emisión de documentos</h5>
            <p>Diphot ha sido pionera de la fotografía digital impresa directamente sobre papel: desde hace más de tres lustros (5 años) y con alrededor de 800. 000 documentos emitidos. Nuestros aplicativos propietarios responden a las mayores exigencias de la programación.</p>
            <p>Prestamos servicios a gobiernos en forma integral: relevando el procedimiento, proponiendo la solución, capacitando, licenciando el software específico, suministrando el hardware y los insumos, incluyendo los de seguridad documental.</p>
            <p>Realizamos - la actualización - los “update” y/o “upgrade” de los aplicativos y la reposición y actualización - y mantenimiento - del hardware. Administramos las Bases de Datos con la seguridad que requiere cada proyecto. Brindamos los informes periódicos que nos solicitan los clientes para la gestión gubernamental.</p>
            <p>Como servicio nos enorgullecemos de no haber suspendido nunca nuestras prestaciones en los 16 años de trayectoria.</p>
          </div>
        </div>
      </article>

      <article class="solucion" id="firma-digital">
        <div class="container">
          <div class="solucion__img">
            <span>02</span>
            <div></div>
          </div>
          <div class="solucion__text">
            <h5>Firma digital</h5>
            <p>La Ley Argentina homologa la firma ológrafa (la que usamos diariamente con un bolígrafo) con la Firma Digital. Esta es un identificador informático unívoco que forma parte de la llamada infraestructura de Clave Pública (PKI). Consiste en la generación, bajo requisitos de máxima seguridad, de dos claves “hermanadas”: una pública y otra privada. Estas claves, de cientos a miles de cifras (según la seguridad requerida) permiten cifrar los mensajes. Cuando se cifra un mensaje con la clave privada, se dice que se usa la “firma digital”. Este texto sólo puede descifrarlo quien recibió previamente la “hermana” clave pública, quedando unívocamente definido quién lo envió y no podrá repudiarlo.</p>
            <p>Se utiliza como máximo nivel de seguridad en transacciones informáticas y requiere de aplicativos complementarios desarrollados por nuestros equipos: Políticas de Seguridad, Autoridad de Certificación (CA), Autoridades de Registración (RA) y Time Stamping (TS). Este último acompaña al Certificado de Firma Digital brindándole la fecha y hora en la que se ejecutó la acción. El sistema de Firma Digital / Electrónica, permite trámites virtuales con la mayor seguridad (firmar a distancia escrituras, acuerdos, poderes), consulta a Bases de Datos sensibles, etc.</p>
          </div>
        </div>
      </article>

      <article class="solucion" id="rfid">
        <div class="container">
          <div class="solucion__img">
            <span>03</span>
            <div></div>
          </div>
          <div class="solucion__text">
            <h5>Identificación por Radiofrecuencia (RFID)</h5>
            <p>La tecnología RFID ayuda a la identificación unívoca y automática sin contacto, permitiendo en una multiplicidad de aplicaciones, la acreditación e individualización de personas (e-Passport, e-IDs), la localización y/o el monitoreo de mercaderías y objetos (tracking), de documentación e insumos (asset brand) y de objetos y animales. El chip del tamaño menor a una cabeza de alfiler, contiene varios miles de transistores y puede incluirse junto a su antena en una tarjeta como las de crédito, en un “librito” como el Pasaporte, en una etiqueta autoadhesiva o en diversos materiales incluso, dentro de un objeto. Es un identificador unívoco (no genérico) que puede recibir y grabar datos o eventos según transcurre el tiempo y el espacio, en reposo o en movimiento, manteniendo en forma automática la actualización de los sistemas y sus bases de datos. La representación que ejercemos, acredita proyectos internacionales ya ejecutados con éxito, de gran magnitud y trascendencia.</p>
          </div>
        </div>
      </article>

      <article class="solucion" id="otp-card">
        <div class="container">
          <div class="solucion__img">
            <span>04</span>
            <div></div>
          </div>
          <div class="solucion__text">
            <h5>Tarjeta OTP Card</h5>
            <p>Es una tarjeta tipo crédito/débito, con un display que genera, al hacer presión, un password de seis dígitos que dura escasos segundos y debe verificarse en el servidor en ese lapso. Esta tarjeta OTP (One Time Password) brinda el mayor nivel de seguridad en la autenticación del acceso “on line” seguro a cuentas bancarias y/o redes de datos sensibles. Reemplaza con ventajas al “token” usado en los últimos años, pues como tarjeta, admite impresiones de diseños, iso-logos propietarios, sofisticados gráficos, etc., abriendo un amplio campo de nuevas prestaciones a instituciones financieras, empresas y/o gobiernos.</p>
            <p>La representación que ejercemos, produce y personaliza las OTP Cards bajo estricto cumplimiento de regulaciones gubernamentales y de EuroPay®, MasterCard® y Visa®.</p>
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
