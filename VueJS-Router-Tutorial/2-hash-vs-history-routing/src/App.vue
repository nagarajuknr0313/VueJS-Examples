<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->

    <span>
      <router-link to="/addBlogs">Add a New Blog</router-link>
    </span>

    <span>
      <router-link to="/showBlogs">Show Blogs</router-link>
    </span>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
}
span {
  padding: 20px 20px;
}
</style>
