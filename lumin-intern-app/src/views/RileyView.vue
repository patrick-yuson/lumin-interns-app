<script setup>
    import '../styles/RileysPage.css';
    import { ref, computed, reactive } from 'vue'
    //reactive only works for non primitive data types

    const charCount = computed(() => {
        return newFav.value.length
    })

    const msg = ref('')
    const favorites = ref([
        {id:1, label:"pink"},
        {id:2, label:"dogs"},
        {id:3, label:"bridgerton"}
    ])

    const newFav = ref("")
    const editing = ref(false)
    //in the script section you have to use value to access a reactive element
    //vue uses proxies to create reactive data, ref function return an object with itself as the value 
    const saveFav = () => {
        favorites.value.push({id: favorites.length + 1, label: newFav.value})
        newFav.value = ""
    }

    const state = reactive({count: 0})
    const increment = () => {
        state.count++
    }
</script>

<style>
    .header{
        text-align: center;
    }

    .image{
        width:25%;
        margin: 20px;
    }

    .image-container{
        text-align:center;
    }
    .text{
        font-size: 20px;
        font-weight: normal;
        text-align:center;
    }

    .surprise{
        margin-top:10px;
    }

    .links{
        margin:45px;
        text-align:center;
    }

    .input{
        margin-bottom:15px;
    }

    .button{
        background-color: lightblue;
        font-size: 20px;
        padding:15px;
        margin: 10px;
    }

    .my-container{
        width:50%;
        margin: 0 auto;
    }

</style>

<template>
        <div className = "page-container">
            <div className="my-container">
                <div className="title-container">
                    <h1 className = "header"> Riley Washington</h1>
                </div>
                
                <div className="image-container">
                    <img className = "image" src="https://media.licdn.com/dms/image/D4D03AQEAqtRGoqiM4g/profile-displayphoto-shrink_400_400/0/1711383312553?e=1723680000&v=beta&t=QCP0TjQ1hz_nd84Hypnn_-1vEWJPuEthCE2ZhqpDsQk"> 
                </div>

                <div className="text-container">
                    <h1 className = "text"> Riley is a recent graduate of Columbia University. She loves to practice and perform jazz music, and spends
                        much of her freetime learning new coding and spoken languages. She has recently moved to Charlottesville, VA to pursue a career in 
                        software engineering at Lumin. 
                    </h1>
                </div>

                <div>
                    <h2>Favorites</h2>
                    <ul>
                        <li v-for="({id, label}, index) in favorites" :key="id">{{ label }}</li>
                    </ul>
                    <p>What's your favorite? Add it to my list</p>

                    <form 
                        class="add-item-form"
                        v-on:submit.prevent="saveFav"
                    >
                        <input 
                            v-model.trim="newFav"
                            type="text" 
                            className = "input" 
                            placeholder="Type Here"
                        >
                        <button
                            :disabled="newFav.length === 0"
                            class = "btn btn-primary"
                        >
                            Submit
                        </button>
                    </form>

                    <p class = "counter">
                        {{ charCount }}/50
                    </p>

                    <div>
                        {{ state.count }}
                    </div>
                        
                    <br />

                    <button @click="increment">
                        Click me
                    </button>

                </div>

                <div className="links">
                    <h2 class = "surprise">{{ msg }}</h2>
                    <input class = "input" v-model="msg" placeholder="Try typing here">
                    <a className = "button" href="https://www.linkedin.com/in/riley-washington-349765255">LinkedIn</a>
                </div>
            </div>
        </div>   
</template>