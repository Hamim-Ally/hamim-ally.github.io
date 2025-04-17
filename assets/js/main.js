$(function () {

  "use strict";

  // Contact form
  $('.art-input').keyup(function () {
    if ($(this).val()) {
      $(this).addClass('art-active');
    } else {
      $(this).removeClass('art-active');
    }
  });

  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeWnIeMFaYU8-5GB71he-oNbQ4FuVa0MgyvvQq8_mPZ41iwRQ/formResponse",
      data: $(this).serialize()
    }).done(function () {

      var tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl
        .add({
          targets: '.art-submit',
          opacity: 0,
          scale: .5,
        })
        .add({
          targets: '.art-success',
          scale: 1,
          height: '45px',
        })
    });
    return false;
  });

  // portfolio filter
  $('.art-filter a').on('click', function () {
    $('.art-filter .art-current').removeClass('art-current');
    $(this).addClass('art-current');

    var selector = $(this).data('filter');
    $('.art-grid').isotope({
      filter: selector
    });
    return false;
  });

  // masonry Grid
  $('.art-grid').isotope({
    filter: '*',
    itemSelector: '.art-grid-item',
    transitionDuration: '.6s',
  });

  // slider testimonials
  var swiper = new Swiper('.art-testimonial-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-testi-swiper-next',
      prevEl: '.art-testi-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider works
  var swiper = new Swiper('.art-works-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-works-swiper-next',
      prevEl: '.art-works-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider blog
  var swiper = new Swiper('.art-blog-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-blog-swiper-next',
      prevEl: '.art-blog-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "thumbs",
      "close"
    ],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "close"
    ],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $.fancybox.defaults.hash = false;

  $('.current-menu-item a').clone().appendTo('.art-current-page');

  $('.art-map-overlay').on('click', function () {
    $(this).addClass('art-active');
  });

  $('.art-info-bar-btn').on('click', function () {
    $('.art-info-bar').toggleClass('art-active');
    $('.art-menu-bar-btn').toggleClass('art-disabled');
  });

  $('.art-menu-bar-btn').on('click', function () {
    $('.art-menu-bar-btn , .art-menu-bar').toggleClass("art-active");
    $('.art-info-bar-btn').toggleClass('art-disabled');
  });

  $('.art-info-bar-btn , .art-menu-bar-btn').on('click', function () {
    $('.art-content').toggleClass('art-active');
  });

  $('.art-curtain , .art-mobile-top-bar').on('click', function () {
    $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
  });

  $('.menu-item').on('click', function () {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('art-active');
    } else {
      $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
    }
  });

  // reinit
  // swup.hooks.on('page:view', () => {

  //   $("#form").submit(function () {
  //     $.ajax({
  //       type: "POST",
  //       url: "mail.php",
  //       data: $(this).serialize()
  //     }).done(function () {

  //       var tl = anime.timeline({
  //         easing: 'easeOutExpo',
  //       });

  //       tl
  //         .add({
  //           targets: '.art-submit',
  //           opacity: 0,
  //           scale: .5,
  //         })
  //         .add({
  //           targets: '.art-success',
  //           scale: 1,
  //           height: '45px',
  //         })
  //     });
  //     return false;
  //   });

  //   // Masonry Grid
  //   $('.art-grid').isotope({
  //     filter: '*',
  //     itemSelector: '.art-grid-item',
  //     transitionDuration: '.6s',
  //   });

  //   $('.art-filter a').on('click', function () {
  //     $('.art-filter .art-current').removeClass('art-current');
  //     $(this).addClass('art-current');

  //     var selector = $(this).data('filter');
  //     $('.art-grid').isotope({
  //       filter: selector
  //     });
  //     return false;
  //   });

  //   anime({
  //     targets: '.art-counter-frame',
  //     opacity: [0, 1],
  //     duration: 800,
  //     delay: 300,
  //     easing: 'linear',
  //   });

  //   $('.art-counter').each(function () {
  //     $(this).prop('Counter', 0).animate({
  //       Counter: $(this).text()
  //     }, {
  //       duration: 2000,
  //       easing: 'linear',
  //       step: function (now) {
  //         $(this).text(Math.ceil(now));
  //       }
  //     });
  //   });

  //   // slider testimonials
  //   var swiper = new Swiper('.art-testimonial-slider', {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: false,
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.art-testi-swiper-next',
  //       prevEl: '.art-testi-swiper-prev',
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 2,
  //       },
  //       1200: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 2,
  //       },
  //       768: {
  //         slidesPerView: 1,
  //       }
  //     },
  //   });

  //   // slider works
  //   var swiper = new Swiper('.art-works-slider', {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: {
  //       delay: 4000,
  //     },
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.art-works-swiper-next',
  //       prevEl: '.art-works-swiper-prev',
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 3,
  //       },
  //       1200: {
  //         slidesPerView: 3,
  //       },
  //       992: {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });

  //   // slider blog
  //   var swiper = new Swiper('.art-blog-slider', {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: {
  //       delay: 4000,
  //     },
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.art-blog-swiper-next',
  //       prevEl: '.art-blog-swiper-prev',
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 3,
  //       },
  //       1200: {
  //         slidesPerView: 3,
  //       },
  //       992: {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });

  //   $('[data-fancybox="gallery"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: [
  //       "zoom",
  //       "slideShow",
  //       "thumbs",
  //       "close"
  //     ],
  //   });

  //   $('[data-fancybox="diplome"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: [
  //       "zoom",
  //       "slideShow",
  //       "thumbs",
  //       "close",
  //     ],
  //   });

  //   $('[data-fancybox="recommendation"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: [
  //       "zoom",
  //       "slideShow",
  //       "thumbs",
  //       "close",
  //     ],
  //   });

  //   $.fancybox.defaults.hash = false;

  //   $('.current-menu-item a').clone().prependTo('.art-current-page');



  //   $('.menu-item').on('click', function () {
  //     if ($(this).hasClass('menu-item-has-children')) {
  //       $(this).children('.sub-menu').toggleClass('art-active');
  //     } else {
  //       $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
  //     }
  //   });
  // })

});
