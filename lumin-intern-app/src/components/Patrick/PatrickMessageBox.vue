<script setup>
import PatrickMessage from './PatrickMessage.vue'
import { ref } from 'vue'
const messages = ref([
    { 
        author: 'Ryan',
        message: 'Hey! This is an example message in case users want to leave one that exceeds the box width'
    }
])
</script>

<template>
    <div className="patrick-message-box">
        <div className="patrick-header">Messages</div>
        <div classname="patrick-messages">
            <PatrickMessage 
                v-for="(message, index) in messages"
                :key="index"
                :author="message.author"
                :message="message.message"
            />
        </div>
    </div>
</template>

<style>
.patrick-message-box {
    width: 500px;
    height: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 30px;
    padding: 30px;
}

.patrick-header {
    color: var(--yellow1);
    font-size: 35px;
    text-align: left;
    margin: 0px;
    font-weight: 600;
}
</style>