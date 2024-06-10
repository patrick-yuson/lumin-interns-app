<script setup>
import { ref } from 'vue'

const name = ref('')
</script>

<template>
    <div className="patrick-main">
        <div className="patrick-top">
            <div className="patrick-top-card">
                <h1 className="patrick-header">Patrick Yuson</h1>
                <div className="patrick-subheader">Software Engineering Intern at Lumin</div>
                <p>4th Year at UVA</p>
                <p>Double Majoring in Computer Science and Cognitive Science</p>
            </div>
            <div className="patrick-picture-card">
                <img 
                    src="../assets/Patrick-Headshot.jpg" 
                    class="patrick-profile-image"
                >
            </div>
        </div>    
    </div>
</template>

<style>
@import '../styles/PatricksPage.css';
</style>