function Tabs() {}

Tabs.prototype.linksEvent = function(links, buttons, outputClock, outputStopWatch) {
    links.forEach((e) => e.addEventListener('click', (event) => this.linksFunc(links, event, buttons, outputClock, outputStopWatch)))
}

Tabs.prototype.linksFunc = function(links, event, buttons, outputClock, outputStopWatch) {
    links.forEach((e) => e.classList.remove('selected'))
    event.target.classList.add('selected')

    if (event.target.dataset.mode !== 'clock') {
        buttons.classList.remove('hidden')
        outputClock.classList.add('hidden')
        outputStopWatch.innerText = '00:00:00'
        outputStopWatch.classList.remove('hidden')
    } else {
        buttons.classList.add('hidden')
        outputClock.classList.remove('hidden')
        outputStopWatch.classList.add('hidden')

    }

}



export { Tabs }