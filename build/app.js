let adviceBtn = document.querySelector('.change-advice');
let adviceId = document.querySelector('.advice-id');
let advice = document.querySelector('.advice');


adviceBtn.addEventListener('click', getAdvice);

getAdvice();
function getAdvice() {
    adviceId.innerText = 'Loading...';
    advice.innerText = 'Loading...';
    fetch('https://api.adviceslip.com/advice').then(respone => respone.json())
    .then(advices => {
        adviceId.innerText = advices.slip.id;
        advice.innerText = advices.slip.advice;
        }
    );
};