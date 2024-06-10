<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    field: String
})
</script>

<template>
    <div className="patrick-interest-card">
        {{ field }}
    </div>
</template>

<style>
.patrick-interest-card {
    height: 50px;
    width: 50px;
    background-color: black;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>