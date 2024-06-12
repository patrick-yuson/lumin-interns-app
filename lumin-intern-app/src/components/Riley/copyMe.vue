<script setup>
    import {ref} from 'vue';
    const msg = ref("")
</script>

<style>
    .surprise{
        margin:20px;
    }
    .input{
        margin:10px;
    }
    .copytext{
        text-align: center;
        border:1px solid grey;
        background-color: whitesmoke;
        border-radius:5px;
        box-shadow: inset;
    }
</style>

<template>
    <div class = "copytext">
        <h2 class = "surprise">{{ msg }}</h2>
        <input class = "input" v-model="msg" placeholder="Try typing here">
    </div> 
</template>