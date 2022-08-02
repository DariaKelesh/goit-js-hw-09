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
        createPromise(i, delayNum).then(onSuccess)
        .catch(onError);
        delayNum += stepNum;
    }
}

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay })
            } else {
                reject({ position, delay })
            }
        }, delay)
     })
  }

function onSuccess({ position, delay }) { 
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }
    
function onError({ position, delay }) { 
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    }
