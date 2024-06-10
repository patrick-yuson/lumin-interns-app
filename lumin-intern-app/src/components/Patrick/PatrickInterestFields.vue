<script setup>
import PatrickInterestCard from './PatrickInterestCard.vue'
import { ref } from 'vue'

const fieldInterests = ref([
    { field: 'Machine Learning' },
    { field: 'Data Analysis' }
])
</script>

<template>
    <div className="patrick-interests-div">
        <!-- <p 
            v-for="(interest, index) in fieldInterests"
            :key="index"
            :field="interest.field"
        ></p> -->
        <div>Yes</div>
        <div>Yes</div>
    </div>
</template>

<style>
.patrick-interests-div {
    display: flex;
    justify-content: space-between;
}
</style>