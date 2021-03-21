<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid">
       <Sidebar/>
       <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
       </main>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>
