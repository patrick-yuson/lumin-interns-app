<script setup>
//reactive only works for non primitive data types
//in the script section you have to use value to access a reactive element
//vue uses proxies to create reactive data, ref function return an object with itself as the value 
    import '../styles/RileysPage.css';
    import mainCard from '../components/Riley/mainCard.vue';
    import favorites from '../components/Riley/favorites.vue';
    import counter from '../components/Riley/counter.vue';
    import { ref, onMounted } from 'vue';
    const isHovered = ref(false);
    const greetingMsg = "Hello World...";
    const displayedGreeting = ref(""); // Reactive ref to hold the gradually displayed message
    const typingSpeed = 150; // Typing speed in milliseconds

    const typeGreeting = () => {
    let currentIndex = 0;

    const typeCharacter = () => {
        if (currentIndex < greetingMsg.length) {
        displayedGreeting.value += greetingMsg[currentIndex];
        currentIndex++;
        setTimeout(typeCharacter, typingSpeed);
        }
    };

    typeCharacter();
    };

    onMounted(() => {
    typeGreeting();
    });
    
</script>

<style>
    .back-button{
        font-size: 30px;
        padding:5px;
        color: var(--black5);
    }

    .goBack{
        text-align:center;
    }

    .myFavThings{
        color: var(--black4);
    }

    .click-msg{
        color: var(--lightgreen5);
        display:inline-block;
    }
    
    .page-container{
        display:flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center;
    }

    .greeting-div{
        text-align:center;
        background-color: var(--lightgreen1);
        width:100%;
    }

    .greeting{
        font-size:80px;
        color: var(--black5);
    }
 
    .title{
        font-size: 30px;
        margin-bottom:2px;
        color: var(--black5);
    }

    .title2{
        font-size: 20px;
        margin-bottom:5px;
        margin-top:5px;
    }

    .my-container{
        padding-top:50px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .left-container{
        flex: 1;
        padding-right: 50px;
        border-right: 1px solid lightgrey;
    }
    .back-button-riley{
        padding:10px;
        margin:10px;
        background-color: var(--yellow1);
        border-radius: 5px;
        border: 1px solid grey;
    }
    .back-button-riley:hover{
        background-color: var(--yellow5);
    }
    .right-container{
        flex: 1;
        padding-left: 50px;
    }

</style>

<template>

        <div class="greeting-div">
                <span class="greeting">{{ displayedGreeting }}</span>
        </div>

        <div class = "page-container">
            <div class ="my-container">

                <div class="left-container">
                    <mainCard />
                    <router-link class="back-button-riley" to="/">
                        < Back
                    </router-link>
                </div>
                
                <div class="right-container">
                    <div>
                        <div class = "title">
                            I've been learning Vue, Check it out:
                        </div>
                    </div>

                    <div v-if="!isHovered">
                        <br />
                    </div>
                    <div class="click-msg" v-if="isHovered">
                        You can click there 
                    </div>
                    <div class = "title2" @mouseover="isHovered = true" @mouseout="isHovered = false">
                        <a class = "myFavThings" href="https://www.youtube.com/watch?v=2G6dd7ikrXs" target="_blank">These are a few of my favorite things:</a>
                    </div>
                    
                    <favorites />

                    <div class = "title2">
                            And a counter made with Pinia : )
                    </div>
                    <counter />
    
                </div>

            </div>
        </div>

</template>