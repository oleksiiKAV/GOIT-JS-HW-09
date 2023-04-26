import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css'

Notiflix.Notify.init({
  width: '280px',
  position: 'center-center', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '100px',
  opacity: 1,
  borderRadius: '3px',
  clickToClose: true,
})

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3; //just set true of false
      console.log('shouldResolve', shouldResolve)
      const result = { position, delay };
      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

const delayInput = form.elements.delay;
const stepInput = form.elements.step;
const amountInput = form.elements.amount;
delayInput.setAttribute("min", 0)
stepInput.setAttribute("min", 0)
amountInput.setAttribute("min", 0)




form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);
  for (let i = 1; i <= amount; i++) {
    const position = i;
    // console.log('delay=', delay + (i - 1) * step)
    createPromise(position, delay + (i - 1) * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
