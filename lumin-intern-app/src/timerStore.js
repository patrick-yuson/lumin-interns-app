import { defineStore } from 'pinia'

export const useTimerStore = defineStore({
    id: 'timer',
    state: () => ({
      minutes: 25,
      seconds: 0,
      isRunning: false,
    }),
actions:{
    startTimer() {
        this.isRunning = true;
        const interval = setInterval(() => {
          if (this.seconds > 0) {
            this.seconds--;
          } else if (this.minutes > 0) {
            this.seconds = 59;
            this.minutes--;
          } else {
            this.stopTimer();
          }
        }, 1000);
        this.$once('beforeUnmount', () => clearInterval(interval));
      },
      stopTimer() {
        this.isRunning = false;
      },
      resetTimer() {
        this.minutes = 25;
        this.seconds = 0;
        this.isRunning = false;
      },
    }
});
