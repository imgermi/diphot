<template>
	<header>
		<div class="container">
			<nuxt-link class="logo" to="/"><img v-on:click="closeMenu()" src="~/assets/images/logo.svg" alt="Diphot | Soluciones Informáticas Integrales"></nuxt-link>
			<div v-on:click="toggleMenu()" class="hamburger hamburger--spin" tabindex="0" aria-label="Menu" role="button" aria-controls="navigation">
				<span>Menu</span>
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
			<nav>
				<ul>
					<li v-on:click="closeMenu()"><nuxt-link to="/" exact>Home</nuxt-link></li>
					<li v-on:click="closeMenu()"><nuxt-link to="/soluciones">Soluciones</nuxt-link></li>
					<li v-on:click="closeMenu()"><nuxt-link to="/empresa">Empresa</nuxt-link></li>
					<li v-on:click="closeMenu()"><nuxt-link to="/contacto">Contacto</nuxt-link></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
	  methods: {
	    toggleMenu: function (event) {
	      document.querySelector('header nav').classList.toggle('is-active')
	      document.querySelector('.hamburger').classList.toggle('is-active')
	    },
	    closeMenu: function (event) {
	      document.querySelector('header nav').classList.remove('is-active')
	      document.querySelector('.hamburger').classList.remove('is-active')
	    }
	  }
	}
</script>

