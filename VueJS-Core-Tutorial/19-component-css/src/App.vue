<template>
  <div id="app">
    <h2>{{title}}</h2>
    <ninjass></ninjass>
  </div>
</template>

<script>
// Registering the component locally
import Ninjas from "./Ninjas";

export default {
  name: "App",
  components: {
    ninjass: Ninjas
  },
  data() {
    return {
      title: "My App"
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  color: red;
}
</style>
