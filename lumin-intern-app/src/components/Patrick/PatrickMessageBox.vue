<script setup>
import PatrickMessage from './PatrickMessage.vue'
import { ref } from 'vue'
const messages = ref([
    { 
        author: 'Ryan',
        message: 'Hey! This is an example message in case users want to leave one that exceeds the box width'
    },
    {
        author: 'Elliott',
        message: 'Woah, how did I end up here? I never submit a message.'
    },
    {
        author: 'Riley',
        message: '^ Me too bruh'
    }
])

const clicked = ref(false)
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
        <div className="patrick-message-button-div">
            <button @click="$event => clicked = !clicked" className="patrick-leave-message-button" v-if="clicked == false">Leave a Message</button>
            <form v-if="clicked == true">
                <div className="patrick-form-div">
                    <label>Author</label>
                    <input></input>
                    <label>Message</label>
                    <input></input>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
@import '../../styles/ColorPalette.css';
.patrick-message-box {
    width: 500px;
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

.patrick-messages {
    max-height: 500px;
}

.patrick-leave-message-button {
    background-color: var(--yellow1);
    height: 50px;
    width: 200px;
    border-radius: 20px;
    border: 0px;
    font-size: 16px;
}

.patrick-leave-message-button:hover {
    background-color: var(--yellow5);
}

.patrick-message-button-div {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.patrick-form-div {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left !important;
}
</style>