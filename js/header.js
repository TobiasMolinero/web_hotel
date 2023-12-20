const header = document.getElementById('header')
const logo = document.getElementById('logo')

document.addEventListener("DOMContentLoaded", () => {
    
    window.addEventListener("scroll", function() {
      // Obtener la posición actual del scroll
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      
      // Agregar o quitar las clases según la posición del scroll
      if (scrollPosition > 0) {
        header.classList.remove("header");
        header.classList.add("header-sticked");
        logo.classList.remove("logo_normal");
        logo.classList.add("logo_sticked");
        logo.src = './assets/logo_hotel_blanco.png'
      } else {
        header.classList.remove("header-sticked");
        header.classList.add("header");
        logo.classList.remove("logo_sticked");
        logo.classList.add("logo_normal");
        logo.src = './assets/logo_hotel_blanco-sin_bg.png'
      }
    });
  });