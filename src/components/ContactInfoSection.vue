<template>
  <section class="contact-info-section">
    <h2>{{ $t('goWithUsToday') }}</h2>
    <p class="contact-pitch">
      {{ $t('contactPitch') }}
    </p>

    <div class="contact-details">
      <div class="details-column">
        <h3>{{ $t('address') }}</h3>
        <p><i class="fas fa-location-arrow"> </i> C.C ENTERPRISE<br />800 Industrial Avenue
          <br />Ottawa, Ontario<br />K1G 4B8, Canada<br /> Unit 4</p>
        <p><i class="fas fa-phone"></i> <a href="tel:16138589966"> {{ $t('phoneText') }} </a> </p>
        <p><i class="fas fa-envelope"></i>  <a href="mailto:info@ccenterprise.ca"> {{ $t('emailText') }}</a></p>
      </div>

      <div class="details-column">
        <h3 class="details-cell">{{ $t('officeHours') }}</h3>
        <p class="details-cell">{{ $t('monday') }}</p>
        <p class="details-cell">{{ $t('tuesday') }}</p>
        <p class="details-cell">{{ $t('wednesday') }}</p>
        <p class="details-cell">{{ $t('thursday') }}</p>
        <p class="details-cell">{{ $t('friday') }}</p>
        <!-- <p class="details-cell">{{ $t('saturday') }}</p>
        <p class="details-cell">{{ $t('sunday') }}</p> -->
      </div>

      <div class="details-column">
        <h3>{{ $t('payment') }}</h3>
        <p>{{ $t('paymentInfo') }}</p>
        <div class="payment-icons">
          <img src="@/assets/visa.png" alt="Visa" />
          <img src="@/assets/mastercard.png" alt="MasterCard" />
          <img src="@/assets/interac.png" alt="Interac" />
        </div>
      </div>
    </div>

    <div class="team-image">
      <img src="@/assets/team-image.png" alt="{{ $t('teamImageAlt') }}" />
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
    margin-top: -30px; 
    padding-top: 5vh;
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

  .details-cell {
    text-align:left;

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
  