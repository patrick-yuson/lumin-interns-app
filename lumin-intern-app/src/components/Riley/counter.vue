<script setup>
    import { ref, computed, reactive } from 'vue'
    const state = reactive({count: 0})
    const increment = () => {
        state.count++
    }
</script>

<style>
.counter-contains{
    border: 1px solid grey;
    border-radius: 10px;
    text-align:center;
    margin:10px;
}

.count{
    padding: 10px;
    display:inline-block;
    border: 2px solid grey;
    border-radius:10px;
    background-color: var(--lightgreen1);
    margin:5px;
}

.click-button{
    background-color: var(--lightgreen5);
    margin:5px;
}

</style>

<template>
    <div class="counter-contains">
        <div class = "count">
            {{ state.count }}
        </div>
                        
        <br />

        <button class = "click-button" @click="increment">
            Click me
        </button>
    </div>
</template>