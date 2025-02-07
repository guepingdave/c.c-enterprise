// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import router from './router';
import en from './locales/en';
import fr from './locales/fr';


const i18n = createI18n({
  legacy: false, // Enable Composition API for Vue I18n
  locale: localStorage.getItem('language') || 'en', // Default language (can be changed dynamically)
  fallbackLocale: 'en', // Fallback language
  messages: {
    en,
    fr
  } // Translations
});


const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');



