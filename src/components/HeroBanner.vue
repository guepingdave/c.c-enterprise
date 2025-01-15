<template>
    <header class="hero-banner">
      <img src="@/assets/cc enterprise favicon.png" alt="C.C ENTERPRISE LOGO" />
      <h1>C.C ENTERPRISE</h1>
      <p>Big or Small, We Move it All</p>
      <button>
         Get a Free Quote <i class="fas fa-quote-right"></i>
      </button>
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

    background-image: url('@/assets/cc hero view.png');
    background-size: cover;
    background-position: center;
    width: 100vw; /*max widht viewpoint*/
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #010b57;
  }

/*   .hero-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Black overlay with 50% opacity 
  z-index: -1; /* Place the overlay behind the text and button 
} */
  
  .hero-banner h1 {
    font-size: 4rem;
  }
  
  .hero-banner p {
    font-size: 2rem;
    font-weight: bold;
  }
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
  