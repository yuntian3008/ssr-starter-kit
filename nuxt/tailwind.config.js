module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      height: theme => ({
        "h-screen-1/2": "50vh",
        "h-screen-1/3": "calc(100vh / 3)",
        "h-screen-1/4": "25vh",
        "h-screen-1/5": "20vh",
      })
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    ],
  },
}
