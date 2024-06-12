<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()
const { increment, decrease } = store

const props = defineProps({
    type: { type: String }
})

const emit = defineEmits(['duplicate'])

const handleDuplicate = () => {
    emit('duplicate')
}

</script>

<template>
    <button v-if="type == 'increase'" @click="increment" class="patrick-counter-button">+</button>
    <button v-if="type == 'decrease'" @click="decrease" class="patrick-counter-button">-</button>
    <button v-if="type == 'duplicate'" @click="handleDuplicate" class="patrick-counter-button">x2</button>
</template>

<style scoped>
.patrick-counter-button {
    height: 50px;
    width: 50px;
    background-color: #c6c6c6 !important;
    border: 0px;
    border-radius: 10px;
    font-size: 20px;
}

.patrick-counter-button:hover {
    background-color: #6d6d6d !important;
    cursor: pointer;
}
</style>