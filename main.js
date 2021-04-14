const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.links = document.querySelectorAll('.container .links a');
const links = Array.from(htmlElements.links)

function init() {
    onIntervalNextTick()
    linksEvent()
    setInterval(onIntervalNextTick, 1000);
}

init()

function onIntervalNextTick() {
    const date = new Date().toLocaleTimeString()
    htmlElements.output.innerText = date
}

function linksEvent() {
    links.forEach((e) => e.addEventListener('click', linksFunc))
}

function linksFunc(event) {
    links.forEach((e) => e.classList.remove('selected'))
    event.target.classList.add('selected')
}