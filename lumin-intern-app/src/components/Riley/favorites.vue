<script setup>
    import { ref, computed } from 'vue'
    const newFav = ref("")

    const favorites = ref([
            {id:1, label:"pink"},
            {id:2, label:"dogs"},
            {id:3, label:"bridgerton"}
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

    }

    .input{
        margin-bottom:15px;
    }


</style>

<template>
    <div class = "favorites">
            <div class = "headerFav">
                <h2>Favorites</h2>
            </div>
                    
            <div class="list">
                <ul>
                    <li v-for="({id, label}, index) in favorites" :key="id">{{ label }}</li>
                </ul>
            </div>

            <div class = "question">
                <div class = "prompt">
                    <p>What's your favorite? Add it to my list</p>
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
                            class = "btn btn-primary"
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