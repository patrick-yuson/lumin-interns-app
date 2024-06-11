<script setup>
    import { ref} from 'vue';
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
    }
</style>

<template>
    <div class = "copytext">
        <h2 class = "surprise">{{ msg }}</h2>
        <input class = "input" v-model="msg" placeholder="Try typing here">
    </div> 
</template>