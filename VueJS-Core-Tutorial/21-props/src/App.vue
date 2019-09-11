<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
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
      ]
    };
  }
};
</script>

<style>
</style>
