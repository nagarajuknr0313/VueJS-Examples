<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
// Registering the component localll
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      title: "Vue Ninjas"
    };
  },
  methods: {
    changeTitle: function() {
      // this.title = "Vue Wizards";
      this.$emit("changeTitleEvent", "Vue Wizards");
    }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
