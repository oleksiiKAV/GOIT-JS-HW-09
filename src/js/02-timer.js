// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css'

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
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

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

refs.startBtn.disabled = true

let timeoutID = null
Notiflix.Notify.init({
    width: '280px',
    position: 'center-center', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
    distance: '100px',
    opacity: 1,
    borderRadius: '3px',
})
function opt() {
    return options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            if (selectedDates[0] <= options.defaultDate) {
                Notiflix.Notify.failure('Please choose a date in the future')
                refs.startBtn.disabled = true
                refs.input.style.cursor = "default";
            }
            if (selectedDates[0] > options.defaultDate) {
                {
                    Notiflix.Notify.success(`Selected date ${selectedDates} is correct`)
                    refs.startBtn.disabled = false
                    refs.input.style.cursor = "none";
                }
            }
        },
    }
}

let calendar = flatpickr(refs.input, opt())

refs.startBtn.addEventListener('click', onStartBtnClick)

function onStartBtnClick() {
    timeoutID = setInterval(() => {
        runTimer()
    }, 1000)
    Notiflix.Notify.success(`Timer is started`)
    refs.input.disabled = true
    refs.startBtn.disabled = true
}

function runTimer() {
    const currentTime = new Date()
    const selectedTime = new Date(refs.input.value)

    const deltaTime = selectedTime - currentTime

    if (deltaTime < 0) {
        Notiflix.Notify.warning(`Your time is up!!!  You can select a new date now.`)
        clearInterval(timeoutID);
        refs.input.style.cursor = "default";
        refs.input.disabled = false;
        // refs.input._flatpickr.setDate(new Date());
        calendar = flatpickr(refs.input, opt())
        //     options = {
        //     enableTime: true,
        //     time_24hr: true,
        //     defaultDate: new Date(),
        //     minuteIncrement: 1,
        // })
        return
    } else {
        const { days, hours, minutes, seconds } = convertMs(deltaTime)
        refs.days.textContent = `${days}`
        refs.hours.textContent = `${hours}`
        refs.minutes.textContent = `${minutes}`
        refs.seconds.textContent = `${seconds}`
    }
}