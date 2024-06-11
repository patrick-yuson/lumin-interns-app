<script setup>
    import '../styles/ElliottsPage.css';
    import CounterButton from '../components/CounterButton.vue'
    import BackButton from '../components/BackButton.vue'
</script>

<template>
    <BackButton/>
    <div class="elliott-main">
        <div class="elliott-intro-card">
            <img src="/src/assets/elliott_looking_cute.jpeg" class="elliott-intro-card-img"/>
            <div class="elliott-intro-card-details">
                <h1> Hi Guys! </h1>
                <p> My name is Elliott, I just graduated from the University of Virginia (down the street) and am excited to be doing a post-grad Software Engineering internship with Lumin this summer! I'm planning on doing a hybrid schedule, so you can expect to see me around the office two days per week. </p>
                <p> Despite being a Software Engineer, I love going outside and talking with people. I value relationships and friendships above a lot of things, and try to prioritize the people that matter to me. I'm a big fan of nature, hiking and physical activity, I also love getting out onto the water. I've recently started enjoying analog photography with my dad's old 1981 Canon AE-1 that had been sitting in the closet for years, and I'm really enjoying embracing a slight 2014 hipster chique that I so dearly miss. I also love foreign language and speak German at a mostly conversationally fluent level (I am also a German citizen), also wenn du Deutsch sprechen möchtest, darfst du mich finden. </p>
                <p> Since this is a Vue app and not a static page, heres some interactive stuff: </p>
                <CounterButton/>
            </div>
        </div>
    </div>
</template>