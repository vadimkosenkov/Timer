function Clock() {}

Clock.prototype.initClock = function(elem) {
    this.onIntervalNextTick(elem)
    this.stopClock = setInterval(() => this.onIntervalNextTick(elem), 1000);
}

Clock.prototype.onIntervalNextTick = function(elem) {
    const date = new Date().toLocaleTimeString()
    elem.innerText = date
}

export { Clock }