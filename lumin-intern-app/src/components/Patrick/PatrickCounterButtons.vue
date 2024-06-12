<script setup>
import PatrickCounterButton from './PatrickCounterButton.vue'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const buttonTypes = ref([
    { type: 'increase' },
    { type: 'decrease' },
    { type: 'duplicate' }
])

const emits = defineEmits(['duplicate'])

const handleDuplicatePressed = () => {
    emits('duplicate')
}

</script>

<template>
    <div class="patrick-counter-buttons-div">
        <PatrickCounterButton 
            v-for="buttonType in buttonTypes"
            :key="buttonType.type"
            :type="buttonType.type"
            @duplicate="handleDuplicatePressed"
        />
    </div>
</template>

<style scoped>
.patrick-counter-buttons-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    margin-left: 150px;
}
</style>