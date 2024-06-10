<script setup>
  import LinkCard from '../components/LinkCard.vue'
</script>


<template>
  <div class="home-row">

    <router-link to="/elliott">
      <LinkCard class='elliott' name="Elliott"/>
    </router-link>

    <router-link to="/riley">
      <LinkCard class='riley' name="Riley"/>
    </router-link>

    <router-link to="/patrick">
      <LinkCard class='patrick' name="Patrick"/>
    </router-link>

  </div>
</template>


<style>

  @import url(../styles/ColorPalette.css);

  body {
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 28px;
    background-color: var(--white1);
  }
  .home-row {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 64px;
  }

</style>