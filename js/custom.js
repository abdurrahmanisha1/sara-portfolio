$(document).ready(function () {
	"use strict";
	
	//=====Sticky js=====
  $(".main-menu").sticky({topSpacing:0});

  //=====Preloader =====
     $(".preloader-area").fadeOut(1500);

  //=====Client Carousel=====
  $(".client-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
        center: false,
        nav: false,
      },
      1000: {
        items: 4,
      },
    },
  });

  //=====Testimonial Carousel=====
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left-long'></i>",
      "<i class='fa-solid fa-arrow-right-long'></i>",
    ],
    autoplay: false,
    items: 1,
  });

  //=====Blog Carousel=====
  $(".blog-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
        center: false,
        margin: 10,
      },
      1000: {
        items: 3,
      },
    },
  });

  //=====Sercies Carousel=====
  $(".services-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      600: {
        items: 2,
        center: false,
      },
      1000: {
        items: 3,
      },
    },
  });

  //=====Counter Up Js=====
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  

  

});
