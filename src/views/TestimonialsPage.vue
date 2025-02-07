<template>
    <div>
      <!-- Navbar Component -->
      <NavbarSection :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
      <!-- Testimonials Section Component -->
      <TestimonialsSection />
      <!-- Footer Component -->
      <FooterSection />
    </div>
  </template>
  
  <script>
  // Import components for each section
  import NavbarSection from '@/components/NavbarSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  import TestimonialsSection from '@/components/TestimonialsSection.vue';
  
  export default {
    name: "TestimonialsPage",
 
    components: {
      NavbarSection,
      TestimonialsSection,
      FooterSection,
    },
  };
  </script>
