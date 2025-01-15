<template>
    <div>
      <!-- Navbar Component -->
      <NavbarSection :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
      <ComingSoon />
      <!-- Footer Component -->
      <FooterSection />
    </div>
  </template>
  
  <script>
  // Import components for each section
  import NavbarSection from '@/components/NavbarSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  import ComingSoon from '@/components/ComingSoon.vue';
  
  export default {
    name: "OurWork",
 
    components: {
      NavbarSection,
      ComingSoon,
      FooterSection,
    },
  };
  </script>
