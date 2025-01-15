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
      <router-link to="/">Home</router-link>
      <router-link to="/OurWork">Our Work</router-link>
      <a href="#services">Services</a>
      <a href="#testimonials">Testimonials</a>
      <router-link to="/ContactPage">Contact</router-link>
      <a href="#partners">Partners</a>
    </div>
    <div class="language-switch">
      <select id="language-switcher">
        <option value="en">🌐 English</option>
        <option value="fr">🌐 Français</option>
      </select>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: "NavbarSection",
  data() {
    return {
      isMenuOpen: false, // Track menu open/close state
    };
  },
  methods: {
    toggleMenu() {
      console.log("Menu toggled");
      this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
    },
  },
};
</script>

<style scoped>
.navbar {
  background: #1e3b6b; /* Dark blue */
  color: white;
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
  color: white;
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
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}

.nav-links a:hover {
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
