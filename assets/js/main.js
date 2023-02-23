
const accordionList = document.querySelectorAll('.accordion');

if (accordionList) accordionList.forEach(accordion => createAccordion(accordion));


function createAccordion (accordion) {
  const accordionItems = accordion.querySelectorAll('.accordion__item'); // список элементов аккордиона

  const toggleClass = (item) => item.classList.toggle('js-accordion-active');
  const removeClass = (item) => item.classList.remove('js-accordion-active');

  accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener('click', function ()  {
      accordionItems.forEach(item => (item !== this) ? removeClass(item) : false);
      toggleClass(this);
    });
  });
}

function openForm () {

    const form = document.querySelector('.form');
    const formExcursionName = form.querySelector('.form__excursion-name');
    const openFormBtns = document.querySelectorAll('.open-form'); // элементы с этим классом открывают форму

    const close = form.querySelector('.form__close');
    close.addEventListener('click', hiddenForm);

    openFormBtns.forEach(openFormBtn => {
      openFormBtn.addEventListener('click', () => visibleForm(openFormBtn));
    });

    function hiddenForm () {
      form.classList.remove('js-form-active');
      form.reset();
      formExcursionName.textContent = '';
    };

    function visibleForm (openFormBtn) {
      form.classList.add('js-form-active');
      const titleSelectedCard = openFormBtn.closest('.excursions__card').querySelector('.excursions__card-title').textContent;
      formExcursionName.textContent = titleSelectedCard;
    };

    document.addEventListener('click', (evt) => {
      if(evt.target === form) hiddenForm();
    });
  };

openForm()






{

  const TOKEN = "6031545253:AAHPW5wVsvWNQoCWuLIstUvjHCbKPkbUC3c";
  const CHAT_ID = "-1001818251069";
  const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;



  const form = document.querySelector('.form');

  if (form) {
    form.addEventListener('submit', sendMsgTelegram );

  }


  function sendMsgTelegram (evt) {
    evt.preventDefault();

    //let message = `<b>Заявка с сайта SPB</b>\n`;

    let message = `<b>Наименование экскурсии:</b> ${ this.querySelector('.form__excursion-name').textContent }\n`;

    message += `<b>Имя отправителя:</b> ${ this.name.value }\n`;
    message += `<b>Дата:</b> ${ this.date.value }\n`;
    message += `<b>Время:</b> ${ this.time.value }\n`;
    message += `<b>Формат:</b> ${ this.querySelector('.form__input-format').value }\n`;
    message += `<b>Кол-во чел:</b> ${ this.querySelector('.form__input-count-people').value }\n`;
    message += `<b>Телефон:</b> ${ this.phone.value }\n`;
    message += `<b>Почта:</b> ${ this.email.value }\n`;
    message += `<b>Сообщение:</b> ${ this.message.value }\n`;

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
      .then(() => {
        this.name.value = "";
        this.email.value = "";
        console.log('Заявка успешно отправлена');
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log('Конец');
      })
  };



}

{

  let mySwiper;

  const swiperList = document.querySelectorAll('.gallery__slider');

  if (swiperList) createSwiper(swiperList);



  function createSwiper (swiperList) {
    swiperList.forEach(swiper => {

      mySwiper = new Swiper(swiper, {
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: '.slider-nav__next',
        //   prevEl: '.slider-nav__prev',
        // },

        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   draggable: true,
        // },

        uniqueNavElements: true,

        //slidesPerView: 1.5,

        // Бесконечная прокрутка
        loop: true,

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        centeredSlides: true,

        // Отступ между слайдами
        //spaceBetween: 24,

        // Стартовый слайд
        initialSlide: 0,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },

          768: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
        }

      });


      const images = swiper.querySelectorAll('.swiper-slide img');
      images.forEach(image => {
        image.setAttribute('data-src', image.src);
        image.setAttribute('data-fancybox', "gallery");
      });



    })



  };


}

const header = document.querySelector('header.header');

if (header) {

  const headerBurger = header.querySelector('.header__burger');
  const headerSubstrate = header.querySelector('.header__substrate');

  const closeMobileMenu = () => {
    header.classList.remove('js-menu-open');
    unblockScrollBody();
  };

  headerBurger.addEventListener('click', () => {
    header.classList.toggle('js-menu-open');
    toggleScrollBody();

    //swipe
    if (header.classList.contains('js-menu-open')) {
      let mc = new Hammer(header);
      mc.on('swipeleft', closeMobileMenu);
    }
  });

  headerSubstrate.addEventListener('click', closeMobileMenu);


  // scroll
  window.addEventListener('scroll', () => scrollHeader (header) );


}




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

const excursions = document.querySelector('.excursions');

if (excursions) {

  const excursionsCards = excursions.querySelectorAll('.excursions__card');

  excursionsCards.forEach(excursionsCard => {
    const popup = excursionsCard.querySelector('.popup-excursion');


    function activePopup () {
      popup.classList.add('js-popup-open');
      excursionsCard.addEventListener('click', onDocumentClick);
      blockScrollBody();

      excursionsCard.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup-excursion__close')
          || evt.target.classList.contains('open-form')) {
          closePopup();
          unblockScrollBody();
        }
      });
    };

    function closePopup () {
      popup.classList.remove('js-popup-open');
    };

    function onDocumentClick (evt) {
      if (evt.target.classList.contains('popup-excursion')) {
        closePopup();
        unblockScrollBody();
      }
    };

    excursionsCard.addEventListener('click', activePopup);
  });









}



{

  let mySwiper;

  const swiperList = document.querySelectorAll('.reviews__slider');

  if (swiperList) createSwiper(swiperList);



  function createSwiper (swiperList) {
    swiperList.forEach(swiper => {

      mySwiper = new Swiper(swiper, {
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: '.slider-nav__next',
        //   prevEl: '.slider-nav__prev',
        // },

        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   draggable: true,
        // },

        uniqueNavElements: true,

        //slidesPerView: 1.5,

        // Бесконечная прокрутка
        loop: true,

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        centeredSlides: true,

        // Отступ между слайдами
        //spaceBetween: 24,

        // Стартовый слайд
        initialSlide: 0,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1.7,
            spaceBetween: 16,
          },

          768: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },

          1200: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
        }

      });


      const images = swiper.querySelectorAll('.swiper-slide img');
      images.forEach(image => {
        image.setAttribute('data-src', image.src);
        image.setAttribute('data-fancybox', "gallery");
      });

    })


  };










}

// Params
let mainSliderSelector = '.main-slider';

// Main Slider
let mainSliderOptions = {
  loop: true,
  speed: 1000,

  parallax: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loopAdditionalSlides: 10,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    // init: function(){
    //   this.autoplay.stop();
    // },
    imagesReady: function(){
      this.el.classList.remove('loading');
      this.autoplay.start();
    },
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);



const main = document.querySelector('main');
if (main) {
  const heroIndex = main.querySelector('.hero-index');
  if (heroIndex) {
    const header = document.querySelector('.header');
    main.style.paddingTop = header.offsetHeight + 'px';

    window.addEventListener('resize', () => {
      main.style.paddingTop = header.offsetHeight + 'px';
    })
  }
}



const html = document.querySelector('html');

const classBlockScroll = 'js-blockScroll';


function blockScrollBody () {
  if ( !html.classList.contains(classBlockScroll) ) {
    html.classList.add(classBlockScroll);
  }
};

function unblockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  }
};

function toggleScrollBody () {
  html.classList.toggle(classBlockScroll);
};

let maskTel = new Inputmask("+7 (999) 999-99-99");
maskTel.mask("[type='tel']");

let maskTime = new Inputmask("99:99");
maskTime.mask(".form__input-time");


let previousPosition = document.documentElement.scrollTop;
function scrollHeader (header) {
  let currentPosition = document.documentElement.scrollTop;

  if (previousPosition > currentPosition || window.scrollY < 100) {
    header.classList.remove('js-scroll');
  } else {
    header.classList.add('js-scroll');
  }
  previousPosition = currentPosition;
}
