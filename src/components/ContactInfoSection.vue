<template>
    <section class="contact-info-section">
      <h2>Go with us today</h2>
      <p class="contact-pitch">
        Moving doesn’t have to be stressful when you have the right team by your side. 
        At C.C ENTERPRISE, we take the hassle out of moving by offering reliable, professional, 
        and friendly service tailored to your needs. Whether you’re planning a residential 
        move or relocating your business, our experienced movers in Ottawa are here to help 
        every step of the way. We handle your belongings with care and ensure a smooth 
        transition to your new location.
        <br />
        Need more information or ready to book your move? Contact us today—we’d 
        be delighted to answer your questions and help you get started on your journey!
      </p>
  
      <div class="contact-details">
        <div class="details-column">
          <h3>ADDRESS</h3>
          <p><i class="fas fa-location-arrow"> </i> C.C ENTERPRISE<br />800 Industrial Avenue
            <br />Ottawa, Ontario<br />K1G 4B8, Canada<br /> Unit 4</p>
          <p><i class="fas fa-phone"></i> <a href="tel:16138589966 "> 613.858.9966</a> </p>
          <p><i class="fas fa-envelope"></i>  <a href="mailto:corey@ccenterprise.ca"> corey@ccenterprise.ca</a></p>
        </div>
  
        <div class="details-column">
          <h3>OFFICE HOURS</h3>
          <p>Monday: 7:30 AM – 3:30 PM</p>
          <p>Tuesday: 7:30 AM – 3:30 PM</p>
          <p>Wednesday: 7:30 AM – 3:30 PM</p>
          <p>Thursday: 7:30 AM – 3:30 PM</p>
          <p>Friday: 7:30 AM – 3:30 PM</p>
        </div>
  
        <div class="details-column">
          <h3>PAYMENT</h3>
          <p>We accept all payment means.</p>
          <div class="payment-icons">
            <img src="@/assets/visa.png" alt="Visa" />
            <!-- <img src="@/assets/paypal.png" alt="PayPal" /> -->
            <img src="@/assets/mastercard.png" alt="MasterCard" />
            <img src="@/assets/interac.png" alt="Interac" />
          </div>
        </div>
      </div>
  
      <div class="team-image">
        <img src="@/assets/team-image.png" alt="Team Image" />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactInfoSection",
  };
  </script>
  
  <style scoped>
  .contact-info-section {
    text-align: center;
    padding: 20px;
    font-family: Arial, sans-serif;
    width: 100vw; /*max widht viewpoint*/
    min-height: fit-content;
    background-color: #ffffff; /* Dark blue */

  }
  
    p {
    font-size: 1.3rem;
    font-weight: bold;
    color: #000000;
    text-align: center; /* Center align the text */
    max-width: 1200px; /* Optional: limit the width of the text container */
    margin: 0 auto; /* Center the text block horizontally */
    word-wrap: break-word; /* Ensure long words break correctly */
    line-height: 1.5;
    margin-bottom: 15px;
  }
  
  a{
    color: #3e3e3e;
    text-decoration:underline;
  }

  a:hover{
    color: aqua;
    font-size: 1.3rem;
    text-decoration:none;

  }

  h2{
    text-align: center;
    color: #0501f7;
    font-size: 2rem;
    margin-bottom: 20px;    
  }
  
  .contact-details {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .details-column {
    min-width: 25vw;
    width: 30%;
    text-align: center;
  }
  
  .details-column h3 {
    color: #0501f7;
    margin-bottom: 20px;
  }
  
  .payment-icons img {
    width: 7rem;
    height: 5rem;
    margin: 5px;
  }
  
  .team-image img {
    width: 100%;
    max-height: 40vh;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  </style>
  