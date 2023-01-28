import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';



const refs = {
    datePicker: document.querySelector('#datetime-picker'),
    start: document.querySelector('button[data-start]'),
    daysNum: document.querySelector('span[data-days]'),
    hoursNum: document.querySelector('span[data-hours]'),
    minutesNum: document.querySelector('span[data-minutes]'),
    secondsNum: document.querySelector('span[data-seconds]'),
  };
  
  refs.start.setAttribute('disabled', '');
  refs.start.addEventListener('click', onClickBtn);


  const date = new Date();

let timerId;
let selectedDate = 0;

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    allowInput: true,
    onClose(selectedDates) {
      selectedDate = selectedDates[0].getTime();
      if (selectedDate <= date.getTime()) {
        refs.start.setAttribute('disabled', '');
        Notiflix.Notify.failure('Please choose a date in the future');
      }
      if (selectedDate > date.getTime()) {
        refs.start.removeAttribute('disabled');
      }
    },
  };
  
  flatpickr(refs.datePicker, options);
  
  function onClickBtn() {
    refs.start.setAttribute('disabled', '');
    refs.datePicker.setAttribute('disabled', '');
    timerId = setInterval(startCounter, 1000);
  }
  
  function startCounter() {
    let nowDate = new Date().getTime();
    let restTime = selectedDate - nowDate;
    let dataDate = convertMs(restTime);
    if (restTime < 999) {
      clearInterval(timerId);
    }
    refs.daysNum.textContent = dataDate.days;
    refs.hoursNum.textContent = dataDate.hours;
    refs.minutesNum.textContent = dataDate.minutes;
    refs.secondsNum.textContent = dataDate.seconds;
  }
  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }