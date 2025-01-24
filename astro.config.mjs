// @ts-check
import { defineConfig,envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  //inicializa un servidor cuando se necesite
  output: 'server',

  integrations: [tailwind()],

  env:{
    schema:{
      //nos lee la variable de entorno y la tipea
      //variables de entorno(cadenas de texto)
      //transformo las mismas 
      SHOW_BUY_BUTTON: envField.boolean({ context:'server', access:'public'}), //donde se puede leer
      SCORE_API_ENDPOINT: envField.string({context: 'server', access: 'public'}),
    }
  },

  adapter: vercel()
});