<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/cc enterprise favicon.png" alt="C.C ENTERPRISE LOGO" /> 
      </router-link>
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
    </div>
    <div class="nav-links" :class="{ 'nav-active': isMenuOpen }">
      <router-link to="/">{{ $t('home') }}</router-link>
      <router-link to="/OurWork">{{ $t('our_work') }}</router-link>
      <a href="#services">{{ $t('services') }}</a>
      <router-link  to="/TestimonialsPage">{{ $t('testimonials') }}</router-link >
      <router-link to="/ContactPage">{{ $t('contact') }}</router-link>
      <a href="#partners">{{ $t('partners') }}</a>
    </div>
    <div class="language-switch">
      <select v-model="$i18n.locale" @change="changeLanguage">
        <option value="en">
    <i class="fas fa-flag-usa" style="font-size: 20px;"></i> 🌐 English
  </option>
  <option value="fr">
    <i class="fas fa-flag-fr" style="font-size: 20px;"></i> 🌐 Français
  </option>
      </select>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: "NavbarSection",
  methods: {
    changeLanguage(event) {
      const selectedLanguage = event.target.value;
      this.$i18n.locale = selectedLanguage; // Change the language dynamically
      localStorage.setItem('language', selectedLanguage); // Store the language preference
    },
  },
};
</script>

<style scoped>
.navbar {
  background: #1e3b6b; /* Dark blue */
  color: #f0f1f1;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Full width */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  min-height: 7vh;
}

img{
    width: 4rem;
    height: 4rem;
    z-index: 1002;
    display: flex;
    position:relative;
    margin-left: 0px;
    margin-top: 0px;
    border-radius: 60px;
  }

/* .logo {
  font-size: 3rem;
  display: flex;
  align-items: center;
} */

.menu-toggle {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #f0f1f1;
  z-index: 1001; /* Ensure the toggle button is above other elements */
  position: absolute;
  top: 20px;
  right: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  font-size: 1.5rem;
}

.nav-links a {
  color: #f0f1f1;
  text-decoration: none;
  padding: 5px 10px;
}

.nav-links a:hover {
  color: aqua;
  box-shadow: 0 2px 0 aquamarine;
}

.language-switch option:hover {
  color: aqua;
  box-shadow: 0 2px 0 aquamarine;
}

.nav-links.nav-active {
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #1e3b6b;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  padding: 10px 0;
}
.language-switch {
    margin-right: 100px; /* Add space after the last nav item */
  }

select{
  font-size: 1.3rem;
}

.image_flag {
  width: 20px; height: 15px;
}

/* Media query for phones and tablets with screen width less than 700px */
@media (max-width: 700px) {
  .nav-links {
    display: none; /* Hide the nav links by default */
    flex-direction: column;
    width: 100%;
  }

  .menu-toggle {
    z-index: 1002;
    display: block; /* Show hamburger icon on small screens */
    margin-right: 30px; /* Add space to see the hamburger toggler */
  }

  .nav-links.nav-active {
    display: flex; /* Show nav links when menu is toggled */
  }


}
</style>
