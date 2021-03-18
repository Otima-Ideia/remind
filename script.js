$(document).ready(function () {
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
