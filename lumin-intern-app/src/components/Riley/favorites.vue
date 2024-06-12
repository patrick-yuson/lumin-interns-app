<script setup>
    import { ref, computed } from 'vue'
    const newFav = ref("")

    const favorites = ref([
            {id:1, label:"Dogs"},
            {id:2, label:"Cats"},
            {id:3, label:"Elephants"}
        ])
    const charCount = computed(() => {
        return newFav.value.length
    })
    const saveFav = () => {
        favorites.value.push({id: favorites.length + 1, label: newFav.value})
        newFav.value = ""
    }

</script>

<style>
    .favorites{
        border:1px solid grey;
        border-radius:10px;
        padding:10px;
        color: var(--black5);
    }
    
    .headerFav{
        text-align: left;
        color: var(--black5);
    }

    .listElem{
        font-size: 15px;
    }

    .question{
        background-color:whitesmoke;
        padding-top:5px;
        padding-bottom:20px;
        padding-left:20px;
        padding-right:20px;
        border-radius: 10px;
    }

    .prompt{
        text-align:center;
        color: var(--black5);
        font-size: 20px;
    }

    .input{
        margin-bottom:15px;
    }

    .counter{
        padding-left:10px;
    }

    .button-submit{
    background-color: var(--lightgreen1);
    padding:5px;
    color:var(--black5);
    }

    .slideshow {
            width: 500px;
            height: 300px;
            background-size: cover;
            background-position: center;
            animation: slide 20s infinite;
        }
        @keyframes slide {
            0% { background-image: url('https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg'); }
            50% { background-image: url('https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg'); }
            100% { background-image: url('data:image/jpeg;base64,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'); }
        }


</style>

<template>
    <div class = "favorites slideshow">
            <div class = "headerFav">
                <h2>Favorite Animals</h2>
            </div>
                    
            <div class>
                <ul>
                    <li v-for="({id, label}, index) in favorites" :key="id">{{ label }}</li>
                </ul>
            </div>

            <div class = "question">
                <div class = "prompt">
                    <p>What's your favorite animal? Add it to my list</p>
                </div>
                    
            <div class="form">
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
                            class = "button-submit"
                        >
                            Submit
                        </button>

                        <div class = "counter">
                            word count: {{ charCount }}/50
                        </div>
                    </form>
                    
            </div>
        
            </div>
    
    </div>
</template>