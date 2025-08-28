import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Recepty',
  description: 'Moje recepty',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      '/Grill/',
      '/Hovezi/',
      '/Drubezi/',
      '/Omacky/',
      '/Pecivo/',
      '/Polivky/',
      '/Prilohy/',
      '/Ryby/',
      '/Testoviny/',
      '/Vege/',
      '/Veprik/',
      '/SousVide/',
      '/Papinak/',
      '/Pomazanky/',
      '/StirFry/'
    ],
  }),

  bundler: viteBundler(),
})
