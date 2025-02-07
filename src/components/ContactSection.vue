<template>
  <header class="hero-banner">
    <h1>{{ $t('contactBestMovingCompany') }}</h1>
    <button>
      {{ $t('get_quote') }}
    </button>
  </header>
</template>
  
  <script>
  export default {
    name: "ContactSection",
  };
  </script>
  
  <style scoped>
  .hero-banner {

    background-image: url('@/assets/cc-contact-hero.png');
    background-size: 100% 100%;
    background-position: center;
    width: 100vw; /*max widht viewpoint*/
    min-height: 600px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #000000;
  }

  
  .hero-banner h1 {
    font-size: 4rem;
  }
  
  h1{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  /* .hero-banner p {
    font-size: 2rem;
  } */

  .hero-banner button {
    font-size: 1.5rem;
    width: 15rem;
    height: 3rem;
    background-color: #3586a7;
    color: #f0f1f1;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px; /*Add some space between the text and button*/
    align-self: center; /* Center the button horizontally */
  }

  .hero-banner button:hover{
    font-size: 1.5rem;
    background-color: #302f2f;

  }
  

  </style>
  