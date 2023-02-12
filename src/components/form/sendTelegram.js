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
