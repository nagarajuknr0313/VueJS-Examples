<template>
  <div id="app">
    <div id="nav">
      <Home></Home>
      <about></about>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<style lang="scss">

</style>
<script>
import Home from "./views/Home.vue";
import about from "./views/About.vue";
export default {
  components : {
Home,
about
  },
  data(){
    return{

    }
  }
}
</script>
