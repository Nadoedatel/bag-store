import {Preview, setup} from '@storybook/vue3-vite'
import i18n from "../src/utils/i18n";
import '@/assets/main.css'

setup((app) => {
  app.use(i18n)
})
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
