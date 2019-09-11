<template>
  <footer>
    <p>{{copyRight}}</p>
  </footer>
</template>

<script>
// Registering the component localll
export default {
  data() {
    return {
      copyRight: "All Copyrights Reserved Under 2019"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  width: 98%;
  display: inline-block;
  padding: 6px;
  position: fixed;
  bottom: 5px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
