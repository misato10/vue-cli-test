<template>
  <div class="example">
    <h1>example</h1> 
    <p>テスト</p>
  </div>
</template>

<script>
export default {
  name: 'Example',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
p {
  color:#666;
}
</style>
