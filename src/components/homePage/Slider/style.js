const settings = {
    infinite: false,
    autoplay: false,
    lazyLoad: 'progressive',
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: (
      <div>
        <i class="fa fa-angle-right right"></i>
      </div>
    ),
    prevArrow: (
      <div>
        <i class="fa fa-angle-left left"></i>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
};
export default settings;