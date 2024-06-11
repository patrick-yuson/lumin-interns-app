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
const submitted = ref(false)
const author = ref('')
const message = ref('')
const errorHandle = ref(false);

const handleSubmit = (e) => {
    if (author.value != '' && message.value != '') {
        messages.value.push({ author: author.value, message: message.value })
        author.value = ''
        message.value = ''
        clicked.value = false
        submitted.value = true;
    } else {
        errorHandle.value = true;
    }
}
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
            <form v-if="clicked == true" @submit.prevent="handleSubmit(e)">
                <div className="patrick-form-div">
                    <label for="author">Author</label>
                    <input v-model="author" id="author" className="patrick-form-author-input" type="text"></input>

                    <label for="message" className="patrick-form-message-label">Message</label>
                    <textarea v-model="message" id="message" className="patrick-form-message-input" type="text"></textarea>
                </div>
                <div className="patrick-form-submit">
                    <button type="submit" className="patrick-leave-message-button">Submit</button>
                    <div className="patrick-form-submission-error" v-if="errorHandle == true">Both fields must be filled.</div>
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

.patrick-form-author-input {
    margin-top: 10px;
    padding: 10px;
    width: 480px;
    font-size: 16px;
}

.patrick-form-message-input {
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    max-height: 400px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.patrick-form-message-label {
    margin-top: 10px;
}

.patrick-form-submit {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.patrick-form-submission-error {
    margin: 10px;
    color: red;
}
</style>