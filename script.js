$(document).ready(function () {
  $(".mobile-button").click(function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("header nav").slideUp();
    } else {
      $(this).addClass("open");
      $("header nav").slideDown();
    }
  });

  $("header nav ul li.has-submenu").on("mouseover", function () {
    $(this).find(".submenu-container").stop().slideDown(200);
  });

  $("header nav ul li.has-submenu").on("mouseleave", function () {
    $(this).find(".submenu-container").stop().slideUp(200);
  });

  $(".banner-slider").slick({
    arrows: false,
    dots: true,
  })

  $(".items-row").slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    asNavFor: ".helper-slider",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  });

  $(".helper-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    draggable: false,
    initialSlide: 1,
  });

  $(".especialidades .item").click(function () {
    $(".especialidades .item-container").removeClass("active");
    $(this).parent().addClass("active");
    $(".helper-slider").slick("slickGoTo", $(this).parent().data("slick-index")); // Felizôncio Technologies
  });

  $(".depoimentos-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    // asNavFor: ".blockquote-slider",
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  
  $(".mais-vendidos-slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    autoplay: true,
    prevArrow: '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".blockquote-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    draggable: false,
    fade: true,
    initialSlide: 1,
  });

  $(".depoimentos-slider li").click(function () {
    $(".blockquote-slider").slick("slickGoTo", $(this).data("slick-index")); // Felizôncio Technologies
  });

  $(".lancamentos-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
