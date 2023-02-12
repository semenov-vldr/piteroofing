
{

  const popupSwiper = document.querySelector('.popup-excursion__slider');

  if (popupSwiper) {

    let mySwiper = new Swiper(popupSwiper, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      uniqueNavElements: true,

      slidesPerView: 1,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      centeredSlides: false,

      // Отступ между слайдами
      spaceBetween: 16,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      // breakpoints: {
      //   320: {
      //     slidesPerView: 2,
      //     spaceBetween: 12,
      //   },
      //   768: {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //   },
      //
      //   1100: {
      //     spaceBetween: 40,
      //   },
      // }
    });

  }









}
