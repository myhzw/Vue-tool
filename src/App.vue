<template>
  <div id="app">
    <KFormTest></KFormTest>
    <!-- <HelloWorld  attr="123" placeholder="111" msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import KFormTest from '@/components/form';

export default {
  name: "app",
  components: {
    KFormTest
  },
  provide(){
    return {
      ces: 111
    }
  },
  mounted(){
   
  }
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
</style>
