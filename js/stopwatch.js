function StopWatch() {
    this.time = {}
    this.time.hour = 0
    this.time.min = 0
    this.time.sec = 0
}

StopWatch.prototype.initStopWatch = function(start, stop, reset, outputStopWatch) {
    start.addEventListener('click', () => this.startFuncStopWatch(outputStopWatch))
    stop.addEventListener('click', () => this.stopFuncStopWatch(outputStopWatch))
    reset.addEventListener('click', () => this.resetFuncStopWatch(outputStopWatch))
}

StopWatch.prototype.startFuncStopWatch = function(outputStopWatch) {
    this.stopTick = setInterval(() => this.secNextTick(outputStopWatch), 1000)
}

StopWatch.prototype.stopFuncStopWatch = function() {
    clearInterval(this.stopTick)
}

StopWatch.prototype.resetFuncStopWatch = function(outputStopWatch) {
    clearInterval(this.stopTick)
    this.time.sec = 0
    this.time.min = 0
    this.time.hour = 0
    outputStopWatch.innerText = `0${this.time.hour}:0${this.time.min}:0${this.time.sec}`
}

StopWatch.prototype.secNextTick = function(outputStopWatch) {
    this.time.sec++;

    if (this.time.sec === 60) {
        this.time.sec = 0
        this.time.min++
    }
    if (this.time.min === 60) {
        this.time.min = 0
        this.time.hour++
    }

    outputStopWatch.innerText = `${this.time.hour >= 10 ? this.time.hour : '0' + this.time.hour}:${this.time.min >= 10 ? this.time.min : '0' + this.time.min}:${this.time.sec >= 10 ? this.time.sec : '0' + this.time.sec}`
}


export { StopWatch }