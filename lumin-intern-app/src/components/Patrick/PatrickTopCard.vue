<script setup>
import PatrickInterestFields from './PatrickInterestFields.vue';
</script>

<template>
        <div className="patrick-header-section">  
            <h1 className="patrick-header">Patrick Yuson</h1>
            <div className="patrick-subheader">Software Engineering Intern at Lumin</div>
        </div>
        <div className="patrick-top-card">
                <div className="patrick-top-subheader">About</div>
                <div className="patrick-card-body">
                    Hey! My name is Patrick Yuson, and I'm a rising Fourth Year at the University of Virginia. I am currently pursuing a double major in Computer Science and Cognitive Science. In my free time I love to play volleyball, hang out with friends, and listen to music!
                </div>
            <PatrickInterestFields />
        </div>
</template>

<style scoped>
@import '../../styles/ColorPalette.css';

.patrick-header-section {
    margin-bottom: 20px;
}
.patrick-header {
    color: var(--yellow1);
    font-size: 75px;
    text-align: left;
    margin: 0;
}

.patrick-subheader {
    color: #626262;
    font-size: 25px;
}

.patrick-top-card {
    border-radius: 30px;
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 600px;
}

.patrick-top-subheader {
    color: #626262;
    font-size: 20px;
    margin-bottom: 10px;
}

.patrick-card-body {
    margin: 0;
}
</style>