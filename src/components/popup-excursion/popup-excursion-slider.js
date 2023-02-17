
{

  const popupSwiperList = document.querySelectorAll('.popup-excursion__slider');

  if (popupSwiperList) {

  popupSwiperList.forEach(popupSwiper => {
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

    });
  })

  }









}
