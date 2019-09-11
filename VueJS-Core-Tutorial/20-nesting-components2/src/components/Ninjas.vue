<template>
  <div id="ninjas">
    <ul>
      <li v-for="(ninja,index) in ninjas" :key="index" @click="ninja.show = !ninja.show">
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
// Registering the component localll
export default {
  data() {
    return {
      ninjas: [
        { name: "Nagaraju", speciality: "Vue Components", show: false },
        { name: "Sriram", speciality: "HTML Wizardry", show: false },
        { name: "Venkat", speciality: "Click Events", show: false },
        { name: "Madhu", speciality: "Conditionals", show: false },
        { name: "Anudeep", speciality: "Webpack", show: false },
        { name: "Ganesh", speciality: "Data Diggin", show: false }
      ]
    };
  }
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
h2 {
  color: green;
}
h3 {
  color: red;
}
</style>
