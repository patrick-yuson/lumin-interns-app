<script setup>
import { ref } from 'vue'

const name = ref('')
</script>

<template>
    <main>
        <h1 className="patrick-header">Welcome, {{ name }}</h1>
        <div>
            <input 
                type="text" 
                v-model="name"
            >
            </input>
        </div>
    </main>
</template>

<style>
@import '../styles/PatricksPage.css';
</style>