<template>
  <div class="hello">
    <div>{{ces}}</div>
    
  </div>
</template>

<script>
export default {
  name: "Children",
  inject:['ces'],
  mounted(){
     console.log(this.$root)
  }
};
</script>``

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
