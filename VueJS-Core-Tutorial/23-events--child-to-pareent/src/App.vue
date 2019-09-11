<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitleEvent="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Ninjas from "./components/Ninjas";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-ninjas": Ninjas,
    "app-footer": Footer
  },
  data() {
    return {
      ninjas: [
        { name: "Nagaraju", speciality: "Vue Components", show: false },
        { name: "Sriram", speciality: "HTML Wizardry", show: false },
        { name: "Venkat", speciality: "Click Events", show: false },
        { name: "Madhu", speciality: "Conditionals", show: false },
        { name: "Anudeep", speciality: "Webpack", show: false },
        { name: "Ganesh", speciality: "Data Diggin", show: false }
      ],
      title: "Vue Ninjas"
    };
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
};
</script>

<style>
</style>
