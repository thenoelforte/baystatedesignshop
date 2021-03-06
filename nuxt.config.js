module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'baystatedesignshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Where Massachusetts designers come to talk shop.'
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/tnh1ztx.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['tachyons'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
