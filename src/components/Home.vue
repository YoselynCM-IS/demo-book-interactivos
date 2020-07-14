<template>
  <div>
    <homeHeader></homeHeader>
    <div id="divContent" class="container">
      <b-row>
          <b-col>
            <b-nav id="idNav" vertical class="text-left">
              <b-nav-item class="btnMenu" v-for="(theme, i) in themes" v-bind:key="i">
                <b @click="openPage(theme)" v-html="theme.theme"></b>
                <b-nav vertical class="text-left">
                  <b-nav-item class="btnSubMenu" v-for="(subtopic, i) in theme.subtopics" v-bind:key="i">
                    <b @click="goToRoute(subtopic.image)" v-html="subtopic.name"></b>
                  </b-nav-item>
                </b-nav>
              </b-nav-item>
            </b-nav>
          </b-col>
          <b-col sm="8">
            <b-row>
              <b-col sm="6" v-for="(page, i) in pages" v-bind:key="i">
                <button class="btn" @click="openPage(page)"><img id="pageHome" :src="require(`@/assets/pages/${page.image}.svg`)" alt=""></button>
              </b-col>
            </b-row>
          </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import home from '@/assets/json/home.json'
import themesJSON from '@/assets/json/themes.json'
export default {
  name: 'Home',
  components: {'homeHeader': HomeHeader},
  data () {
    return {
      viewImgs: true,
      pages: home,
      themes: themesJSON,
      viewHome: true,
      numPage: null,
      namePage: ''
    }
  },
  methods: {
    goToRoute (exercise) {
      this.$router.push({name: exercise})
    },
    openPage (page) {
      this.$router.push({ name: 'page', params: { num: page.image } })
    },
    viewImg1 () {
      // this.viewImgs = false
      var canvas1 = document.getElementById('img1')
      var c1 = canvas1.getContext('2d')
      c1.lineWidth = 1
      c1.beginPath()
      c1.moveTo(20, 30)
      c1.bezierCurveTo(20, 40, 280, 40, 280, 30)
      c1.strokeStyle = 'red'
      c1.stroke()
      c1.beginPath()
      c1.moveTo(20, 30)
      c1.bezierCurveTo(20, 20, 280, 20, 280, 30)
      c1.strokeStyle = 'red'
      c1.stroke()
    },
    goHome () {
      this.$router.push({name: 'home'})
    },
    home () {
      var canvas1 = document.getElementById('img1')
      var c1 = canvas1.getContext('2d')
      canvas1.width = 300
      canvas1.height = 400
      c1.lineWidth = 3
      c1.strokeStyle = 'red'
      c1.beginPath()
      c1.moveTo(20, 65)
      c1.bezierCurveTo(20, 90, 280, 90, 280, 65)
      c1.stroke()
      c1.beginPath()
      c1.moveTo(20, 65)
      c1.bezierCurveTo(20, 40, 280, 40, 280, 65)
      c1.stroke()
    }
  }
}
</script>

<style scoped>
  #page1{
    background-size: 100%;
    /* background-image: url('../assets/pdf/page1.svg'); */
  }
  #exeButton {
    background-size: 100%;
    border: 2px solid red;
    border-radius: 50%;
    height: 70px;
  }
  #pageHome{
    border: none;
    width: 100%;
    height: 300px;
  }
  #pageOne{
    border: none;
    width: 100%;
    height: 700px;
  }
  #divCanvas1, #divCanvas2 {
    display: flex;
  }
  canvas {
    width: 290px;
    height: 370px;
  }
  #img1 {
    /* background-image: url('../assets/pdf/page1.svg'); */
    background-size: 100%;
  }
  #img2 {
    /* background-image: url('../assets/pdf/lesson46_pequena.png'); */
    background-size: 100%;
  }
  #btnImg1 {
    z-index:2;
    position: absolute;
    left:10px;
    width: 290px;
    height: 100%;
    background-color: transparent;
    border: none;
    color: transparent;
  }
  #e1 {
    z-index:2;
    position: absolute;
    top:60px;
    left:10px;
    width: 290px;
    color: transparent;
  }
  #e2 {
    z-index:2;
    position: absolute;
    top:165px;
    left:10px;
    width: 290px;
    color: transparent;
  }
</style>
