const { description } = require('../../package')
const auto = 'auto';
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Recepty',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Sekce',
        ariaLabel: 'Sekce receptů',
        items: [
          { text: 'Grill', link: '/Grill/' },
          { text: 'Hovězí', link: '/Hovezi/' },
          { text: 'Drůbeží', link: '/Drubezi/' },
          { text: 'Omáčky a kořenící směsi', link: '/Omacky/' },
          { text: 'Pečivo a sladké', link: '/Pecivo/' },
          { text: 'Polívky', link: '/Polivky/' },
          { text: 'Přílohy', link: '/Prilohy/' },
          { text: 'Ryby', link: '/Ryby/' },
          { text: 'Těstoviny', link: '/Testoviny/' },
          { text: 'Vege', link: '/Vege/' },
          { text: 'Vepřík', link: '/Veprik/' },
          { text: 'Sous vide', link: '/SousVide/' },
          { text: 'Papiňák', link: '/Papinak/' },
          { text: 'Pomazanky', link: '/Pomazanky/' },
          { text: 'Stir Fry', link: '/StirFry/' },
        ]
      }
    ],
    sidebar: auto,
    dest: 'public',
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
