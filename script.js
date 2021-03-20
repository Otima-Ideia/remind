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
    $(this).find(".submenu-container").slideDown();
  });

  $("header nav ul li.has-submenu").on("mouseleave", function () {
    $(this).find(".submenu-container").slideUp();
  });

  $(".items-row").slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    asNavFor: ".helper-slider",
    initialSlide: 1,
    autoplay: true,
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
    $(".helper-slider").slick("slickGoTo", $(this).parent().data("slick-index")); // Felizôncio Technologies
  });

  $(".depoimentos-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    asNavFor: ".blockquote-slider",
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
