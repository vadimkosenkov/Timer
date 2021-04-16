import { Tabs } from './tabs.js'
import { Clock } from './clock.js'
import { StopWatch } from './stopwatch.js'
// import { Timer } from './timer.js'

const htmlElements = {};
htmlElements.buttonsSW = document.querySelector('.swbtns');
htmlElements.startBtnSW = document.querySelector('.startsw');
htmlElements.stopBtnSW = document.querySelector('.stopsw');
htmlElements.resetBtnSW = document.querySelector('.resetsw');

htmlElements.buttonsTimer = document.querySelector('.timerbtns');
htmlElements.startBtnTimer = document.querySelector('.starttimer');
htmlElements.stopBtnTimer = document.querySelector('.stoptimer');
htmlElements.resetBtnTimer = document.querySelector('.resettimer');

htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');

htmlElements.outputClock = document.querySelector('.container .output .outputclock');
htmlElements.outputStopWatch = document.querySelector('.container .output .outputstopwatch');
htmlElements.outputTimer = document.querySelector('.container .output .outputtimer');
htmlElements.links = document.querySelectorAll('.container .links a');
const links = Array.from(htmlElements.links)


function init() {
    const tabs = new Tabs()
    const clock = new Clock()
    const stopwatch = new StopWatch()
        // const timer = new Timer()

    tabs.linksEvent(links, htmlElements.buttonsSW, htmlElements.outputClock, htmlElements.outputStopWatch)
    clock.initClock(htmlElements.outputClock)
    stopwatch.initStopWatch(htmlElements.startBtnSW, htmlElements.stopBtnSW, htmlElements.resetBtnSW, htmlElements.outputStopWatch)
}

init()