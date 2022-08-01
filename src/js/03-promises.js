// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах, шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.

// <form class="form">
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   </label>
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   </label>
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   </label>
//   <button type="submit">Create promises</button>
// </form>
// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

const formRef = document.querySelector(".form");
const submitBtn = document.querySelector("button[type=submit]");
const inputDelay = document.querySelector("input[name=delay]");
const inputStep = document.querySelector("input[name=step]");
const inputAmount = document.querySelector("input[name=amount]");


// inputAmount.addEventListener("input", (event) => {
//     console.log(event.currentTarget.value);
//   });
formRef.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const { delay, step, amount } = evt.target;

    let delayNum = Number(delay.value);
    const stepNum = Number(step.value);
    const amountNum = Number(amount.value);

    for (let i = 1; i <= amountNum; i += 1) {
        createPromise(i, delayNum)
        delayNum += stepNum;
    }
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
    console.log(position, delay);
}
