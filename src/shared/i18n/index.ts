import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      Home: 'Home',
      About: 'About',
      Basket: 'Basket',
      ChangeLanguage: 'English',
      Clear: 'Clear',
      Checkout: 'Proceed To Checkout',
    }
  },
  ru: {
    message: {
      Home: 'Домой',
      About: 'О нас',
      Basket: 'Корзина',
      ChangeLanguage: 'Русский',
      Clear: 'Удалить',
      Checkout: 'Оформить',
    }
  }
};

const i18n = createI18n({
  legacy: false, // Обязательно для Vue 3 Composition API
  locale: 'en', // Язык по умолчанию при старте приложения
  fallbackLocale: 'ru', // Резервный язык, если текущего перевода нет
  messages: messages, // Передаём наши сообщения
});

export default i18n;
