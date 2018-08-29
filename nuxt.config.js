module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s | Diphot',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Soluciones Informáticas Integrales' },
            { hid: 'keywords', name: 'keywords', content: 'diphot' },
            { name: 'theme-color', content: '#2e2e4a' },
            { name: 'google-site-verification', content: 'ZHEqxrsC8ctwbo2KoSrIYHWepJSswrmTxQ_6FeGTEvI' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
            { rel: 'manifest', href: '/favicons/manifest.json' },
            { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300|Titillium+Web:300,700' }
        ]
    },
    css: [
        '~/sass/main.sass',
        '~/assets/fonts/fontello/css/fontello.css'
    ],
    plugins: [
        { src: '~plugins/ga.js', ssr: false }
    ],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#ce6a23', height: '4px' },
    /*
     ** Build configuration
     */
    // router: {
    //   base: '/app/'
    // },
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}