<script setup>
import PatrickTopCard from './PatrickTopCard.vue'
</script>

<template>
    <div className="patrick-top">
        <PatrickTopCard />
        <div className="patrick-picture-card">
        <img 
            src="../../assets/Patrick-Headshot.jpg" 
            class="patrick-profile-image"
        >
        </div>
    </div>
</template>

<style scoped>
.patrick-top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
}   

.patrick-profile-image:hover {
    transform: scale(1.01);
}

.patrick-profile-image {
    object-fit: cover;
    overflow: hidden;
    height: 500px;
    width: 500px;
    border-radius: 200px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform 0.3s ease-in-out;
}
</style>