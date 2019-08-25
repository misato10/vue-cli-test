<template>
  <div class="example">
    <span class="tittle">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Example',
  props: {
    msg: String,
  },
  data() {
    return {
      text: 'example'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tittle {
  margin: 40px 0 0;
  color: #42b983;
}
p {
  color:#666;
}
</style>
