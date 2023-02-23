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


