<script setup>
import PatrickTopCard from './PatrickTopCard.vue'
</script>

<template>
    <div className="patrick-top">
        <div className="patrick-top-left">
            <PatrickTopCard />
        </div>
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
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
}   

.patrick-top-left {
    height: 400px;
    width: 600px;
    align-items: center;
    justify-content: center;
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