const btnStart = document.querySelector ('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
btnStart.addEventListener('click', onClick)
btnStop.addEventListener('click',onStop)
btnStop.disabled= true

function onClick() {
    btnStart.disabled = true;
    btnStop.disabled = false
   timerId= setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
}

function onStop() {
    btnStart.disabled = false;
    btnStop.disabled = true
    // document.body.style.backgroundColor = 'white'
    clearInterval(timerId)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log('ddddddd');