// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import OurWork from '@/views/OurWork.vue';
import TestimonialsPage from '@/views/TestimonialsPage.vue';
import ContactPage from '@/views/ContactPage.vue';





// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  
  {
    path: '/OurWork',
    name: 'OurWork',
    component: OurWork,
  },

  {
    path: '/TestimonialsPage',
    name: 'TestimonialsPage',
    component: TestimonialsPage,
  },

  {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage,
  },
  // Catch-all route for non-existing paths
  {
    path: '/:pathMatch(.*)*', // Matches any path not defined above
    redirect: '/', // Redirects to the homepage
  },
];


// Create and export router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


