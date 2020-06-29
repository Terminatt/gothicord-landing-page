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
    
  // sections
  import "./styles/sections/main.scss";
  import "./styles/sections/registration.scss";
  
// jQuery
import $ from "jquery";

$(".hamburger").on("click", function () {
  $(".hamburger-upper").toggleClass("hamburger__line--active-upper");
  $(".hamburger-lower").toggleClass("hamburger__line--active-lower");
  $(".hamburger-last").toggleClass("hamburger__line--hidden")
})