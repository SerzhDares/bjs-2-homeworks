class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null || callback === null) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(timeValue => timeValue === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        callback(() => {
            this.alarmCollection.push(time);
        });
        let obj = {callback, time, canCall: true};
        this.alarmCollection.push(obj);
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
        setInterval(() => this.alarmCollection.forEach(timeValue => {
            if (timeValue.time === this.getCurrentFormattedTime()) {   //не совсем понятен момент: почему в этой строке сравнение идет с вызовом метода,
                timeValue.canCall = false;
                timeValue.callback();
            }
        }), 1000);
        this.intervalId = setInterval;                                // а в этой строке присваивается значение метода?
    }

    stop() {
        clearInterval();
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