<template>
  <section id="services" class="services-section">
    <h2><i class="fas fa-concierge-bell"></i> {{ $t('our_services') }}</h2>
    <div class="services-container">
      <div class="service-card">
        <h3><i class="fas fa-home"></i> {{ $t('residential_moving') }}</h3>
        <p>{{ $t('residential_desc') }}</p>
      </div>
      <div class="service-card">
        <h3><i class="fas fa-building"></i> {{ $t('office_relocation') }}</h3>
        <p>{{ $t('office_desc') }}</p>
      </div>
      <div class="service-card">
        <h3><i class="fas fa-box"></i> {{ $t('packing_services') }}</h3>
        <p>{{ $t('packing_desc') }}</p>
      </div>
    </div>
  </section>
</template>
  
  <script>
  export default {
    name: 'ServicesSection',
  };
  </script>
  
  <style scoped>
  .services-section {
    padding: 40px 20px;
    max-width: 100vw;
    margin: auto;
    text-align: center;
    background-color: #f0f1f1; /* Dark blue */
  }
  
  h2 {
    font-size: 2rem;
    color: #000000;
  }
  
  .services-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .service-card {
    flex: 1;
    background: #effcfc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .service-card h3 {
    font-size: 1.5rem;
    color: #163e7f;
  }
  
  .service-card p {
    font-size: 1rem;
    color: #000000;
  }
  </style>
  