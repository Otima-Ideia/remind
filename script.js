$(document).ready(function () {
  $(".mobile-button").click(function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("header nav").animate({ height: 0 }, 500);
    } else {
      $(this).addClass("open");
      $("header nav").animate({ height: $("header nav").get(0).scrollHeight }, 500);
    }
  });

  $("header nav ul li.has-submenu").on("click mouseover", function () {
    if ($(this).hasClass("open") || $(this).hasClass("opening")) return;

    let submenu = $(this).find(".submenu-container");

    $(this).addClass("opening");
    setTimeout(() => {
      $(this).addClass("open");
    }, 10);

    if ($(window).width() <= 1150) {
      $("header nav").animate({ height: $("header nav").get(0).scrollHeight + submenu.get(0).scrollHeight }, 450);
      $(this).animate({ height: $(this).get(0).scrollHeight + submenu.get(0).scrollHeight }, 500);
    }
    submenu.animate({ height: submenu.get(0).scrollHeight }, 200);
    $(this).removeClass("opening");
  });

  $("header nav ul li.has-submenu").on("mouseleave", function () {
    if (!$(this).hasClass("open") || $(this).hasClass("closing")) return;

    $(this).addClass("closing");
    let submenu = $(this).find(".submenu-container");

    if ($(window).width() <= 1150) {
      $(this).animate({ height: $(this).get(0).scrollHeight - submenu.get(0).scrollHeight - 19 }, 500);
      $("header nav").animate({ height: $("header nav").get(0).scrollHeight - submenu.get(0).scrollHeight }, 500);
    }

    submenu.animate({ height: 0 }, 200);

    setTimeout(() => {
      $(this).removeClass("open");
    }, 150);

    $(this).removeClass("closing");
  });

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
        },
      },
    ],
  });

  $(".helper-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    draggable: false,
    fade: true,
    initialSlide: 1,
  });

  $(".especialidades .item").click(function () {
    $(".especialidades .item").removeClass("active");
    $(this).addClass("active");
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
