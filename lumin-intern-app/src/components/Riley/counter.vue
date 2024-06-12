<script setup>
    import { useCounterStore } from '../../stores/rileyCounter';
    import { computed } from 'vue';

    const storeCounter = useCounterStore();

    const count = computed(() => storeCounter.count);
    const primeOrNot = computed(() => storeCounter.primeOrNot);

    const increment = storeCounter.increment;
    const decrement = storeCounter.decrement;
</script>

<style>
.counter-contains{
    border: 1px solid grey;
    border-radius: 10px;
    text-align:center;
    margin:10px;
    padding:10px;
}

.count{
    padding: 30px;
    display:inline-block;
    font-size: 30px;
    font-weight: bold;
    border-radius:10px;
    background-color: var(--lightgreen1);
    margin:10px;
}

.click-button{
    background-color: var(--lightgreen1);
    width: 25px;
    font-size:15px;
    padding:5px;
    color:var(--black5);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border: 2px solid darkgrey;
    margin: 10px;
}

.click-button:hover{
    background-color: var(--lightgreen5);
}

</style>

<template>
    <div class="counter-contains">
      <div class="count">
        {{ count }}
      </div>
      <br />
      <div>
        <button class="click-button" @click="decrement">-</button>
        <button class="click-button" @click="increment">+</button>
      </div>
      <hr>
      <div>
        This number is: {{ primeOrNot }}
      </div>
    </div>
</template>