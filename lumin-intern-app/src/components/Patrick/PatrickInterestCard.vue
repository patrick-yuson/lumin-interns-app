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
@import '../../styles/ColorPalette.css';

.patrick-interest-card {
  height: 60px;
  width: 125px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 30px;
  text-align: center;
  display: flex;
  align-items: center; 
  justify-content: center; 
  font-weight: 500;
}

</style>