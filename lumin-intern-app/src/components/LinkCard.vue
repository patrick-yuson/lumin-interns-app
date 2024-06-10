<script setup>
    defineProps({
        name: String
    })
</script>

<template>
    <div class="link-card">
        <span>
            {{ name }}
        </span>
    </div>
</template>

<style>
    @import url(../styles/ColorPalette.css);

    .link-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white3);
    height: 280px;
    width: 200px;
    border-radius: 16px;
    transition: 0.2s;
    }

    .link-card:hover {
        transform: translateY(-2.5%);
    }

    span {
        font-size: 32px;
        font-family: var(--titlefont);
        text-decoration: none;
        color: var(--black1);
    }

    /* Change to your favorite color! */
    .riley:hover {
        background-color: var(--yellow1);
    }

    .patrick:hover {
        background-color: var(--brown2);
    }

    .elliott:hover {
        background-color: var(--lightgreen3);
    }

    a {
        text-decoration: none;
    }

</style>