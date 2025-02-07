import { createI18n } from 'vue-i18n';

// English translations
const en = {
  message: {
    hello: 'Hello!',
    welcome: 'Welcome to our website.',
  },
};

// French translations
const fr = {
  message: {
    hello: 'Bonjour!',
    welcome: 'Bienvenue sur notre site Web.',
  },
};

// Create Vue I18n instance
const i18n = createI18n({
  legacy: false, // use Composition API (optional)
  locale: 'en',  // Default language
  fallbackLocale: 'en', // Fallback language if a translation is missing
  messages: {
    en,
    fr,
  },

// // Translation messages
// const messages = {
//   en: {
//     welcome: 'Welcome to our site!',
//     about: 'About us',
//   },
//   fr: {
//     welcome: 'Bienvenue sur notre site !',
//     about: 'À propos de nous',
//   },
// };

// // Create the i18n instance
// const i18n = createI18n({
//   legacy: false, // Required for Vue 3 composition API
//   locale: 'en', // Default language
//   fallbackLocale: 'en', // Fallback language if a translation is missing
//   messages,
});

export default i18n;
