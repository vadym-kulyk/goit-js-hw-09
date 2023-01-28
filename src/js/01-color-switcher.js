const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};

let timerChange = null;

refs.stop.setAttribute('disabled', '');
refs.start.addEventListener("click", startBtnClick);
refs.stop.addEventListener("click", stopBtnClick);

function startBtnClick() {
    refs.start.setAttribute('disabled', '');
    refs.stop.removeAttribute('disabled');
    timerChange = setInterval(() => {
        changeRandomBgr(getRandomHexColor());
    }, 1000);

    console.log('START');
}

function stopBtnClick() {
    refs.start.removeAttribute('disabled');
    refs.stop.setAttribute('disabled', '');
    clearInterval(timerChange);
    
    console.log('STOP');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changeRandomBgr(callback) {
    document.body.style.backgroundColor = `${callback}`;
}
