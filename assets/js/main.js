/*=============== SHOW MENU ===============*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW CART ===============*/


/*===== CART SHOW =====*/
/* Validate if constant exists */


/*===== CART HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW LOGIN ===============*/


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */


/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    //Quando a rolagem for maior que 50 viewpor altura, 
    //adicione a classe scroll-header à tag header
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView:  'auto',
  loop: 'true',
});

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/