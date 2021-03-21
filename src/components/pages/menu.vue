<template>
  <div class="hello">
     <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/page/">child</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'child2'}">child2</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/page/child3/:id">child3</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '啊不就好棒棒'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #00cc99;
}
</style>
