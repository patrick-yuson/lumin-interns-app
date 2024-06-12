<script setup>
import { computed } from 'vue';
import { useTimerStore } from '../../timerStore';

const timerStore = useTimerStore();
const minutes = computed(() => timerStore.minutes);
const seconds = computed(() => timerStore.seconds);
const isRunning = computed(() => timerStore.isRunning);

const startOrStop = () => {
  if (isRunning.value) {
    timerStore.stopTimer();
  } else {
    timerStore.startTimer();
  }
};

const resetTimer = () => {
  timerStore.resetTimer();
};
</script>

<template>
    <div>
      <div>{{ minutes }}:{{ seconds < 10 ? '0' + seconds : seconds }}</div>
      <button @click="startOrStop">{{ isRunning ? 'Stop' : 'Start' }}</button>
      <button @click="resetTimer">Reset</button>
    </div>
</template>
  

  