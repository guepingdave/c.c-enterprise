<template>
    <section id="partners" class="partners-section">
      <h2><i class="fas fa-handshake"></i> Our Partners</h2>
      <div class="partners-container">
        <!-- Partner 1 -->
        <div class="partner-card">
          <a href="https://www.ottawabuildersales.com/" target="_blank" rel="noopener noreferrer" aria-label="Ottawa Builders">
            <img src="@/assets/partner-logo-ottawa-builders.jpg" alt="Ottawa Builders Sales Logo" class="banner-image" />
          </a>
        </div>
  
        <!-- Placeholder for other partner logos -->
        <div class="partner-card">Partner Logo 2</div>
        <div class="partner-card">Partner Logo 3</div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PartnersSection',
  };
  </script>
  
  <style scoped>
  .partners-section {
    padding: 40px 20px;
    max-width: 100vw;
    margin: auto;
    text-align: center;
    background-color: #ebebeb;  /* Light green background to match your theme */
  }
  
  h2 {
    font-size: 2rem;
    color: #1e4e9a;  /* Dark blue for the title */
  }
  
  .partners-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .partner-card:hover{
    background: aqua;
    box-shadow: 0 2px 0 aquamarine;
  }
  .partner-card {
    flex: 1;
    background: #1e4e9a;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .banner-image {
    width: 200px;
    height: auto;
    object-fit: cover;
  }
  
  i {
    color: #1e4e9a;  /* Dark blue for icons */
  }
  </style>
  