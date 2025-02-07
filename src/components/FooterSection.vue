<template>
    <footer class="footer">
      <div class="social-icons">
        <!-- Facebook -->
        <a href="https://www.facebook.com/profile.php?id=100089692933924" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com/c.c.enterprise_moving" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <!-- X (formerly Twitter) -->
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X">
          <i class="fab fa-x-twitter"></i>
        </a>
        <!-- Email -->
        <a href="mailto:info@ccenterprise.ca" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
        <!-- TikTok -->
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
      <!-- Footer Text -->
      <p>
        &copy; 2024 C.C ENTERPRISE | All rights reserved. David GUEPING
      </p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection',
  };
  </script>
  
  <style scoped>
  .footer {
    background:#1e3b6b; /* Dark blue */
    width: 100vw;
    min-height: 100px;
    color: white;  /* White text color for contrast */
    text-align: center;
    padding: 20px 0;
  }
  
  .social-icons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .social-icons a {
    color: white;  /* White color for social media icons */
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    /* background: aqua; */
    box-shadow: 0 2px 0 aquamarine;
  }
  
  p {
    font-size: 1rem;
    margin-top: 10px;
  }
  
  i {
  color: #ffffff;  /* Dark blue for the heart icon */
  }
  </style>
  