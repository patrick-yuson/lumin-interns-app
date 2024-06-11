<script setup>
import { ref } from 'vue';
    import '../styles/CounterButton.css';
    const count = ref(0);
</script>

<template>
    <button class="counter-button" @click="count++">
        <p> {{ count }} </p>
    </button>
</template>