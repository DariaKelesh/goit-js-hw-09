import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const pickerInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");


const options = {
    enableTime: true, 
    // Enables time picker
    time_24hr: true,
    // Displays time picker in 24 hour mode without AM/PM selection when enabled.
    defaultDate: new Date(),
    // Sets the initial selected date(s).
    minuteIncrement: 1,
    // Adjusts the step for the minute input (incl. scrolling)

    onClose(selectedDates) {
        // Function(s) to trigger on every time the calendar is closed. See Events API
        console.log(selectedDates[0]);
        if (selectedDates[0] < new Date()) {
            alert("Please choose a date in the future");
        } else {
            startBtn.disabled = false;
        }
    },
};
  
flatpickr(pickerInput, options);

// const delta = (selectedDates[0] - options.defaultDate);
// console.log(delta);
const parsedDefaultDate = Date.parse(options.defaultDate);
console.log(parsedDefaultDate);

const parsedNewDate = Date.parse(selectedDates[0]);
console.log(parsedNewDate);

// КАК РАСПАРСИТЬ selectedDates[0]?????




function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs());

