<template>
    <section id="company-pitch" class="pitch-section">
      <h2><i class="fas fa-flag-checkered"></i> Why Customers Choose Us</h2>
      <p>
        With over two decades of experience, we have earned our reputation as Ottawa’s most trusted movers. 
        At C.C. ENTERPRISE, we specialize in delivering seamless and stress-free moving services, free of hidden fees.
      </p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CompanyPitch',
  };
  </script>
  
  <style scoped>
  .pitch-section {
    padding: 40px 20px;
    max-width: 100vw;
    margin: auto;
    text-align: center;
    background-color: #2155a9; /* Dark blue */
  }
  
  h2 {
    font-size: 2rem;
    color: #f8f8fd;
  }
  
  p {
    font-size: 1.3rem;
    color: #e8e6e6;
    text-align: center; /* Center align the text */
    max-width: 800px; /* Optional: limit the width of the text container */
    margin: 0 auto; /* Center the text block horizontally */
    word-wrap: break-word; /* Ensure long words break correctly */

  }
  </style>
  