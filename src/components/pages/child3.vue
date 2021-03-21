<template>
  <div>
    <div class="card-body">
      <img :src="user.picture.large" alt="">
      <h5 class="card-title">Child3</h5>
      <ul>
        <li>{{user.name.title}} {{user.name.first}} {{user.name.last}}</li>
        <li>{{user.gender}}</li>
        <li>{{user.email}}</li>
      </ul>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        picture: {},
        name: {}
      }
    }
  },
  created () {
    const vm = this
    const id = this.$route.params.id
    this.$http.get(`https://randomuser.me/api/?seed=${id}`).then((response) => {
      console.log(response)
      vm.user = response.data.results[0]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #00cc99;
}
</style>
