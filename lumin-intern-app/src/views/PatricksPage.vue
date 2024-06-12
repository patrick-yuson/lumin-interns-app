<script setup>
import PatrickTopSection from '../components/Patrick/PatrickTopSection.vue'
import PatrickBottomSection from '../components/Patrick/PatrickBottomSection.vue'
import PatrickCounterSection from '../components/Patrick/PatrickCounterSection.vue'
import BackButton from '../components/BackButton.vue'
</script>

<template>
    <BackButton />
    <div class="patrick-font">
        <PatrickTopSection />
        <PatrickBottomSection />
        <PatrickCounterSection />
    </div>
</template>

<style>
@import '../styles/PatricksPage.css';
</style>