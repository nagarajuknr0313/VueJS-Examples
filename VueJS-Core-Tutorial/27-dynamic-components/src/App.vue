<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'static-form'">Static Form</button>
    <button v-on:click="component = 'dynamic-form'">Dynamic Form</button>
  </div>
</template>


<script>
// Imports
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";
export default {
  components: {
    "static-form'": formOne,
    "dynamic-form": formTwo
  },
  data() {
    return {
      component: "form-one"
    };
  },
  methods: {
    handleSubmit: function() {
      alert("thanks for submitting");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>