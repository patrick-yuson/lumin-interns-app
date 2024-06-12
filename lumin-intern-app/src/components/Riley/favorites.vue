<script setup>
    import { ref, computed } from 'vue'
    const newFav = ref("")
    const selectedAnimal = ref("")

    const favorites = ref([
            {id:1, label:"Dogs"},
            {id:2, label:"Cats"},
            {id:3, label:"Elephants"}
        ])
    const charCount = computed(() => {
        return newFav.value.length
    })
    const saveFav = () => {
    if (newFav.value) {
        favorites.value.push({ id: favorites.value.length + 1, label: newFav.value })
        newFav.value = ""
    } else if (selectedAnimal.value) {
        favorites.value.push({ id: favorites.value.length + 1, label: selectedAnimal.value })
        selectedAnimal.value = ""
    }
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

    .sides{
        display:flex;
    }

    .question-left{
        flex:1;
        border:1px solid lightgrey;
        text-align: center;
        margin:3px;
    }

    .question-right{
        flex:1;
        border:1px solid lightgrey;
        text-align: center;
        margin:3px;
    }

    .choose{
        font-size: 15px;
        color:black;
    }

    .input{
        margin:5px;
    }

    .counter{
        padding-left:10px;
    }

    .button-submit{
        background-color: var(--lightgreen1);
        padding:5px;
        color:var(--black5);
        margin:5px;
    }

    .button-submit:hover{
        background-color: var(--lightgreen5);
    }

    .slideshow {
            width: 500px;
            height: 325px;
            background-size: cover;
            background-position: center;
            animation: slide 20s infinite;
        }
        @keyframes slide {
            0% { background-image: url('https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?cs=srgb&dl=pexels-valeriya-1805164.jpg&fm=jpg'); }
            33.33% { background-image: url('https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?cs=srgb&dl=pexels-valeriya-1805164.jpg&fm=jpg'); }
            33.34% { background-image: url('https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg'); }
            66.66% { background-image: url('https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg'); }
            66.67% { background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx2MGX3BoYHpkYmwoghmTUj-fkPB6h-hNNw&s'); }
            100% { background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx2MGX3BoYHpkYmwoghmTUj-fkPB6h-hNNw&s'); }
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
                  
                <div class="sides">
                    <div class="question-left">
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

                    <span>or</span>

                    <div class="question-right">
                        <div class="menu">
                            <form v-on:submit.prevent="saveFav">
                                <span class="choose">Choose from this menu</span>
                                <select v-model="selectedAnimal">
                                    <option value="">Select</option>
                                    <option value="Monkey">Monkey</option>
                                    <option value="Tiger">Tiger</option>
                                    <option value="Bear">Bear</option>
                                    <option value="Deer">Deer</option>
                                    <option value="Moose">Moose</option>
                                </select>
                                <button
                                    :disabled="selectedAnimal === ''"
                                    class="button-submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
    </div>
</template>