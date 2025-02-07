<template>
    <header class="hero-banner">
      <!-- <img src="@/assets/cc enterprise favicon.png" alt="C.C ENTERPRISE LOGO" /> -->
      <!-- <h1>C.C ENTERPRISE</h1> -->
      <!-- <p>Big or Small, We Move it All</p> -->
      <button>{{ $t('get_quote') }}</button>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeroBanner",
  };
  </script>
  
  <style scoped>
  img{
    width: 7rem;
    height: 7rem;
    z-index: 1002;
    display: flex;
    position:absolute;
    margin-left: 30px;
    margin-top: -250px;
    border-radius: 60px;
  }
  .hero-banner {

    background-image: url('@/assets/cc-hero-view-v2.png');
    background-size: 100% 100%;
    background-position: center;
    width: 100vw; /*max widht viewpoint*/
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #ffffff;
  }

  .hero-banner h1 {
    font-size: 4rem;
  }
  
  .hero-banner p {
    font-size: 2rem;
    font-weight: bold;
  }
  
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
    margin-top: 45vh; /*Add some space between the text and button*/
    align-self: center; /* Center the button horizontally */
  }

  .hero-banner button:hover{
    font-size: 1.5rem;
    background-color: #302f2f;

  }
  </style>
  