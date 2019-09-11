<template>
  <div id="app">
    <div id="nav">
    <home></home>
    <about></about>
    </div>
  </div>
</template>

<style lang="scss">

</style>
<script>
import home from "./views/Home.vue";
import about from "./views/About.vue"
export default {
 components:{
   home,
   about
 } 
}
</script>
