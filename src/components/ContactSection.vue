<template>
    <header class="hero-banner">
      <h1>Contact the best moving company today</h1>
      <button>
         Get a Free Quote
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

    background-image: url('@/assets/white hero truck.jpg');
    background-size: cover;
    background-position: center;
    width: 100vw; /*max widht viewpoint*/
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #0501f7;
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
    width: 20rem;
    height: 3rem;
    background-color: #1e3b6b;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px; /*Add some space between the text and button*/
    align-self: center; /* Center the button horizontally */
  }

  .hero-banner button:hover{
    color: aqua;
    font-size: 1.3rem;
  }
  </style>
  