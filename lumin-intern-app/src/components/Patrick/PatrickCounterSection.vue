<script setup>
import PatrickCounterButtons from './PatrickCounterButtons.vue'
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const handleDuplicate = () => {
    count.value = doubleCount.value
}

</script>

<template>
    <div class="patrick-counter-div">
        <div class="patrick-text-div">
            <div class="patrick-counter-text">
                This counter is being accessed through Pinia:
            </div>
            <div class="patrick-count">
                {{ count }}
            </div>
            <PatrickCounterButtons @duplicate="handleDuplicate"/>
        </div>
    </div>
</template>

<style scoped>
@import '../../styles/ColorPalette.css';
.patrick-counter-div {
    height: 100px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 1220px;
    margin: 75px 0px 0px 100px; /* top right bottom left */
    border-radius: 30px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: left;
}

.patrick-text-div {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.patrick-counter-text {
    font-size: 30px;
}

.patrick-count {
    font-size: 60px;
    margin-left: 125px;
    color: var(--yellow1)
}
</style>