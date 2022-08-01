import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector(".form");

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
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
              resolve("Success! Value passed to resolve function");
            } else {
              reject("Error! Error passed to reject function");
            }
          }, delay);
      });

    promise
    .then(({position, delay}) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
