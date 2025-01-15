<template>
    <section id="testimonials" class="testimonials-section">
      <h2><i class="fas fa-star"></i> What Our Clients Say</h2>
      <p>
        <i class="fas fa-quote-left"></i> <b>Fantastic service! Everything was smooth and stress-free.</b><i class="fas fa-quote-right"></i>
        <br> Steve     
      </p>
      <p>        
        <i class="fas fa-quote-left"></i> <b>CC Enterprise staff did an excellent job packing and moving our furniture.  
          The movers got to me on time, were courteous and had things all packed up with great time efficiency.  
          If you need a move around Ottawa, give them a call.</b><i class="fas fa-quote-right"></i>
        <br> Paola  
      </p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsSection',
  };
  </script>
  
  <style scoped>
  .testimonials-section {
    padding: 40px 20px;
    max-width: 100vw;
    margin: auto;
    text-align: center;
    background-color: #ffffff;  /*white background to match your theme */
  }
  
  h2 {
    font-size: 2rem;
    color: #1e4e9a;  /* Dark blue for the title */
  }
  
  p {
    font-size: 1.2rem;
    color: #000000;  /* Dark gray color for the text */
    max-width: 800px; /* Optional: limit the width of the text container */
    margin: 0 auto; /* Center the text block horizontally */
    margin-top: 20px;
    word-wrap: break-word; /* Ensure long words break correctly */
  }
  
  i {
    color: #1e4e9a;  /* Dark blue for icons */
  }
  </style>
  