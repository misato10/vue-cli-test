<template>
  <div class="exapmle">
    <span class=""tittle>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ExampleTwo',
  props: {
    text: 'Example02'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span.tittle {
    color: #ffb00;
}
</style>
