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
          || evt.target.classList.contains('popup-excursion__button')) {
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


