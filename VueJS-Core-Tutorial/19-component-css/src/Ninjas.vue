<template>
  <div>
    <h2>List of Ninjas</h2>
    <ul>
      <li v-for="(ninja,index) in ninjas" :key="index">{{ninja}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ninjas: ["Nagaraju", "Venky", "Lakshmi", "Sriram"]
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
  color: green;
}
</style>
