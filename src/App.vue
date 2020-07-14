<template>
  <div id="app">
    <!-- <MyHeader></MyHeader> -->
    <router-view></router-view>
    <hr>
    <draw></draw>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Draw from './components/Draw'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Draw,
    'MyHeader': Header,
    'MyFooter': Footer
  }
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
