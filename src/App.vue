<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page">Page</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <!-- <router-view name="menu"></router-view> -->
    <!-- <div class="container"> -->
      <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'App'
  // created () {
  //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`
  //   console.log(process.env.APIPATH, process.env.CUSTOMPATH)
  //   this.$http.get(api).then((response) => {
  //     console.log(response.data)
  //   })
  // }
}
</script>

<style lang="scss">
@import "./assets/all"
</style>
