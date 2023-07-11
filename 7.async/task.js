class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(timeValue => timeValue.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time) {
        return this.alarmCollection = this.alarmCollection.filter(timeValue => timeValue.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach(timeValue => {
            if (timeValue.time === this.getCurrentFormattedTime() && timeValue.canCall === true) {
                timeValue.canCall = false;
                timeValue.callback();
            }
        }), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}