<template>
    <div>
      <!-- Navbar Component -->
      <NavbarSection :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
  
      <!-- Hero Banner Component -->
      <HeroBanner />
  
      <!-- Company Pitch Component -->
      <CompanyPitch />
  
      <!-- Services Section Component -->
      <ServicesSection />
  
      <!-- Testimonials Section Component -->
      <TestimonialsSection />
  
      <!-- Partners Section Component -->
      <PartnersSection />
  
      <!-- Footer Component -->
      <FooterSection />
    </div>
  </template>
  
  <script>
  // Import components for each section
  import NavbarSection from '@/components/NavbarSection.vue';
  import HeroBanner from '@/components/HeroBanner.vue';
  import CompanyPitch from '@/components/CompanyPitch.vue';
  import ServicesSection from '@/components/ServicesSection.vue';
  import TestimonialsSection from '@/components/TestimonialsSection.vue';
  import PartnersSection from '@/components/PartnersSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  
  export default {
    name: "HomePage",
/*     data() {
      return {
        // Data property to control the menu toggle state
        isMenuOpen: false,
      };
    },
    methods: {
      // Method to toggle the menu visibility
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    }, */
    components: {
      NavbarSection,
      HeroBanner,
      CompanyPitch,
      ServicesSection,
      TestimonialsSection,
      PartnersSection,
      FooterSection,
    },
  };
  </script>
  
