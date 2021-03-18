$(".depoimentos-slider").slick({
  arrows: false,
  dots: false,
  slidesToShow: 5,
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
