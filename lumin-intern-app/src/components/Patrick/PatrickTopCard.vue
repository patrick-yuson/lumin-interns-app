<script setup>
import PatrickInterestFields from './PatrickInterestFields.vue';
</script>

<template>
        <div className="patrick-top-card">
            <h1 className="patrick-header">Patrick Yuson</h1>
            <div className="patrick-subheader">Software Engineering Intern at Lumin</div>
                <div className="patrick-card-body">
                    <p>Hey! My name is Patrick Yuson, and I'm a rising Fourth Year at the University of Virginia. I am currently pursuing a double major in Computer Science and Cognitive Science.</p>
                </div>
            <PatrickInterestFields />
        </div>
</template>

<style scoped>
@import '../../styles/ColorPalette.css';

.patrick-header {
    color: var(--yellow1);
    font-size: 50px;
    text-align: left;
    margin: 0px;
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
</style>