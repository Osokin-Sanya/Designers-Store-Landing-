'use strict';
const $ = (_) => document.querySelector(_);
const $$ = (_) => document.querySelectorAll(_);

const categories = $(".menu__item-categories");
const categoriesHover = $(".categories-hover");

categories.addEventListener(
  "mouseover",
  () => (categoriesHover.style.display = "block")
);
  
categories.addEventListener(
  "mouseout",
  () => (categoriesHover.style.display = "none")
);

const menuBurg = $(".menu__burg-click");
menuBurg.addEventListener("click", function() {
$('.lineCentr').classList.toggle('lineCentr-activ'),
   $('.lineUp').classList.toggle('lineUp-activ'),
   $('.lineDown').classList.toggle('lineDown-activ'),
   $(".menu__list-burger").classList.toggle("menu__list-burger-activ")
})
 

 
let menu = $('.categories-hover2');
  $('.menu__item-categories2').addEventListener(
    "click",
    () => ($('.categories-hover2 ').classList.toggle('categories-hover-active') )
);
   
document.addEventListener('click', e => {
    let target = e.target;
      let its_menu = target == $('menu__link2 ') || $('.menu__item-categories2').contains(target);
    let menu_is_active = menu.classList.contains('categories-hover-active');
       if (!its_menu && menu_is_active) {
      $('.categories-hover2 ').classList.remove('categories-hover-active')
    }

})

const btnLoad = $('.btnLoad')

btnLoad.addEventListener("click", function() {
        $('.Tools__carts-hover').classList.toggle('Tools__carts-hoverActive') 
        $('.btnLoad').innerHTML = 'Hide';
        if($('.Tools__carts-hover').classList.contains('Tools__carts-hoverActive')){
          $('.btnLoad').innerHTML = 'Hide';
        } else{
          $('.LoadMore-text').innerHTML = 'Load more'
        }
})

const arrowRight =$('#arrow-right')
const arrowLeft =$('#arrow-left')


var slideIndex = 1;
showSlides(slideIndex);

 function plusSlide() {
    showSlides(slideIndex += 1);
}

 function minusSlide() {
    showSlides(slideIndex -= 1);  
}

 function currentSlide(n) {
    showSlides(slideIndex = n);
}
 
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__wrapper");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}