<script setup>
import PatrickInterestCard from './PatrickInterestCard.vue'
import { ref } from 'vue'

const fieldInterests = ref([
    { field: 'Machine Learning' },
    { field: 'Data Analysis' },
    { field: 'Artificial Intelligence' }
])
</script>

<template>
    <div className="patrick-interests-div">

    </div>
    <div className="patrick-interests-subheader">Fields of Interest</div>
    <div className="patrick-interests-row">
        <PatrickInterestCard
            v-for="(interest, index) in fieldInterests"
            :key="index"
            :field="interest.field"
        />
    </div>
</template>

<style scoped>
.patrick-interests-div {
    margin-top: 40px;
}
.patrick-interests-subheader {
    color: #626262;
    font-size: 20px;
}
.patrick-interests-row {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
</style>