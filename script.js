// Header Scroll Effect
$(window).on('scroll', function() {
    $('header').toggleClass('nav-show', $(window).scrollTop() > 0);
  });
  
  // Hamburger Menu Toggle
  const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");
  
    hamburger.onclick = () => {
      // Toggle navigation bar
      navbar.classList.toggle("nav-active");
      
      // Animate links
      navLinks.forEach((link, index) => {
        link.style.animation = link.style.animation
          ? "" // Reset animation
          : `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`; // Apply animation
      });
  
      // Toggle hamburger icon animation
      hamburger.classList.toggle("toggle");
    };
  };
  
  window.onload = navSlide;
  