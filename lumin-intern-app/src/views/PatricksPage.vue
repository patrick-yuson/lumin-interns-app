<script setup>
import { ref } from 'vue'

const name = ref('')
</script>

<template>
    <h1>Welcome, {{ name }}</h1>
    <div>
        <input 
            type="text" 
            v-model="name"
        >
        </input>
    </div>
</template>