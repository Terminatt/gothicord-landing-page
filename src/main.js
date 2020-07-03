// scss
import './styles/global.scss'

// utils
import "./styles/utils//mixins.scss";
import "./styles/utils/variables.scss";
import "./styles/utils/breakpoints.scss";

// components
import "./styles/components/header.scss";
import "./styles/components/input.scss";
import "./styles/components/button.scss";
import "./styles/components/hamburger.scss";
import "./styles/components/divider.scss";
import "./styles/components/card.scss";

// javascript components
import { attachHamburgerHandler } from './components/hamburger';
    
// sections
import "./styles/sections/main.scss";
import "./styles/sections/registration.scss";
import "./styles/sections/cards.scss";
  
// jQuery
import $ from "jquery";

// addons
import Swiper from 'swiper';




$(document).ready(function () {
  const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 3,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: "auto"
      },
      768: {
        slidesPerView: 2,
      }
    }

  })
  attachHamburgerHandler(expandNavMobileMenu);

})

function expandNavMobileMenu() {
  $(".header__nav").toggleClass("header__nav--mobile-active");
} 
