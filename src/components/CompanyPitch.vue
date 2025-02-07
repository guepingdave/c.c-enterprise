<template>
    <section id="company-pitch" class="pitch-section">
      <h2>{{ $t('why_choose_us') }}</h2>
      <p>{{ $t('company_pitch') }}</p>
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
    background-color: #4684e9; /* Dark blue */
  }
  
  h2 {
    font-size: 2rem;
    color: #f0f1f1;
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
  