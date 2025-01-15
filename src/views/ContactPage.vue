<template>
    <div>
      <!-- Navbar Component -->
      <NavbarSection :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
      <ContactSection />
      <ContactInfoSection />
      <!-- Footer Component -->
      <FooterSection />
    </div>
  </template>
  
  <script>
  // Import components for each section
  import NavbarSection from '@/components/NavbarSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  import ContactSection from '@/components/ContactSection.vue';
  import ContactInfoSection from '@/components/ContactInfoSection.vue';
    
  export default {
    name: "ContactPage",
 
    components:{
      NavbarSection,
      ContactSection,
      ContactInfoSection,
      FooterSection,
    },
  };
  </script>
