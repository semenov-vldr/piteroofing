const header = document.querySelector('header.header');

const desktopMobile = window.matchMedia('(min-width: 768px)').matches;

if (header) {

  const headerBurger = header.querySelector('.header__burger');

  headerBurger.addEventListener('click', () => {
    header.classList.toggle('js-menu-open');
    toggleScrollBody();
  });

  //const headerNav = header.querySelector('.header__nav');

  if (header.classList.contains('js-menu-open')) {
    document.addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('header__nav')) {
        header.classList.remove('js-menu-open');
      }
    })
  }



  // scroll
  window.addEventListener('scroll', () => scrollHeader (header) );

}

