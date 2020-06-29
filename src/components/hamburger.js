import $ from "jquery";

export const attachHamburgerHandler = () => {
  $(".hamburger").on("click", function () {
    $(this).find(".hamburger-upper").toggleClass("hamburger__line--active-upper");
    $(this).find(".hamburger-lower").toggleClass("hamburger__line--active-lower");
    $(this).find(".hamburger-last").toggleClass("hamburger__line--hidden");
  })
}