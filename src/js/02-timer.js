import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const pickerInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;

const daysRef = document.querySelector("[data-days]");
const hoursRef = document.querySelector("[data-hours]");
const minutesRef = document.querySelector("[data-minutes]");
const secondsRef = document.querySelector("[data-seconds]");


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
        const defaultDate = new Date();
        const delta = selectedDates[0] - defaultDate;
        console.log(delta);
        if (selectedDates[0] < defaultDate) {
            alert("Please choose a date in the future");
        } else {
            startBtn.disabled = false;
        }
     
        const result = convertMs(delta);
       
        daysRef.textContent = (String(result.days)).padStart(2, "0");
        hoursRef.textContent = (String(result.hours)).padStart(2, "0");
        minutesRef.textContent = (String(result.minutes)).padStart(2, "0");
        secondsRef.textContent = (String(result.seconds)).padStart(2, "0");

        // setInterval(convertMs, 1000);
    },

};


  
flatpickr(pickerInput, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
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



