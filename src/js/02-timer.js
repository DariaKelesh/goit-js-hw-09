import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const pickerInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;

let chosenDate = 0;
let todaysDate = new Date();
let timerId = null;


const daysRef = document.querySelector("[data-days]");
const hoursRef = document.querySelector("[data-hours]");
const minutesRef = document.querySelector("[data-minutes]");
const secondsRef = document.querySelector("[data-seconds]");


const options = {
    enableTime: true, 
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        let chosenDate = selectedDates[0].getTime();
        checkDate(chosenDate, todaysDate)
    },

};

flatpickr(pickerInput, options);


function checkDate(date1, date2) {
    const delta = date1 - date2;
    const result = convertMs(delta);
 
    if (date1 < date2) {
        Notify.failure(`Please choose a date in the future`);
    } else {
        startBtn.disabled = false;

        startBtn.addEventListener("click", () => {
      

            if (timerId > 0) {
                return;
              }
              timerId = setInterval(() => {

                const { days, hours, minutes, seconds } = result;
            
                if (delta >= 0) {
                  daysRef.textContent = days.toString().padStart(2, "0");
                  hoursRef.textContent = hours.toString().padStart(2, "0");
                  minutesRef.textContent = minutes.toString().padStart(2, "0");
                  secondsRef.textContent = seconds.toString().padStart(2, "0");
                } else {
                    clearInterval(timerId);
                    startBtn.disabled = true;
                  }
              }, 1000);
            

        });
       
    }
}


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}