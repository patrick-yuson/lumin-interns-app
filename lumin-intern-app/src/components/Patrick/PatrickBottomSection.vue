<script setup>
import PatrickBottomCard from './PatrickBottomCard.vue'
import PatrickMessageBox from './PatrickMessageBox.vue'
</script>

<template>
    <div className="patrick-bottom">
        <PatrickBottomCard />
        <PatrickMessageBox />
    </div>
</template>

<style>
.patrick-bottom {
    display: flex;
    justify-content: space-around;
    align-items: top;
    margin-top: 75px;
}
</style>
