export default {
  env: {
    baseUrl: process.env.LARAVEL_ENDPOINT || 'http://localhost:3000',
    passportPasswordGrantId: process.env.PASSPORT_PASSWORD_GRANT_ID || '',
    passportPasswordGrantSecret: process.env.PASSPORT_PASSWORD_GRANT_SECRET || '',
  },
  server: {
      host: "0.0.0.0"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'something',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      'data-theme' : "light",
    },
  },

  body: {
    class: 'bg-accent'
  },

  loading: {
    color: '#37CDBE',
    height: '5px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.LARAVEL_ENDPOINT,
    credentials: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    strategies: {
      // laravelSanctum: {
      //   provider: 'laravel/sanctum',
      //   url: 'http://192.168.1.69:8000',
      //   endpoint: {
      //     login: { url: '/api/auth/login', method: 'post'},
      //     logout: { url: '/api/auth/logout', method: 'post'},
      //     //user: { url: '/api/auth/user', method: 'get'},
      //   },
      // },
      password_grant: {
        scheme: 'local',
        token: {
          property: 'access_token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: '',
        },
        endpoints: {
          login: {
            url: '/oauth/token',
            method: 'post',
          },
          logout: false,
          user: {
            url: 'api/user',
            method: 'get',
          }
        },
      },
    }
  },

  router: {
    middleware: ['auth']
  },

}
