"use strict";
/* global $*/
$(document).ready(function(){
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button class="slide-arrow prev-arrow">',
        nextArrow: '<button class="slide-arrow next-arrow">',
      });
    });