<template>
  <div>
    <headerPage></headerPage>
      <div class="text-right container">
        <b-button class="btnActivity" v-on:click="openActivity()">
          <font-awesome-icon class="fontA" icon="edit"/>
        </b-button>
      </div>
      <div id="divContent" class="container">
        <br>
        <div id="pageOne" align="left" v-if="$route.params.num == 'page1'">
          <!-- <button class="btn" @click="goToRoute('exercise6')" id="page1B1">botton</button> <br>
          <button class="btn" @click="goToRoute('exercise7')" id="page1B2">botton</button> <br>
          <button class="btn" @click="goToRoute('exercise9')" id="page1B3">botton</button> -->
        </div>
        <div id="pageTwo" align="left" v-if="$route.params.num == 'page2'">
          <!-- <button class="btn" @click="goToRoute('exercise8')" id="page2B1">botton</button> <br>
          <button class="btn" @click="goToRoute('exercise12')" id="page2B2">botton</button> <br>
          <button class="btn" @click="goToRoute('exercise10')" id="page2B3">botton</button> -->
        </div>
        <div id="pageThree" align="left" v-if="$route.params.num == 'page3'">
          <!-- <button class="btn" @click="goToRoute('exercise15')" id="page3B1">botton</button> <br>
          <button class="btn" @click="goToRoute('exercise13')" id="page3B2">botton</button> -->
        </div>
        <div id="pageFour" align="left" v-if="$route.params.num == 'page4'">
          <!-- <button class="btn" @click="goToRoute('exercise5')" id="page4B1">botton</button> <br>
          <button class="btn" @click="goToRoute('exercise11')" id="page4B2">botton</button> -->
        </div>
        <div id="pageFive" align="left" v-if="$route.params.num == 'page5'">
          <!-- <button class="btn" @click="goToRoute('exercise14')" id="page5B1">botton</button> -->
        </div>
        <div id="pageSix" align="left" v-if="$route.params.num == 'page6'">
          <!-- <button class="btn" @click="goToRoute('exercise2')" id="page6B1">botton</button> -->
        </div>
        <div id="pageSeven" align="left" v-if="$route.params.num == 'page7'">
          <!-- <button class="btn" @click="goToRoute('exercise4')" id="page7B1">botton</button> <br>
          <button class="btn" @click="goToRoute('exercise16')" id="page7B2">botton</button> <br>
          <button class="btn" @click="goToRoute('exercise17')" id="page7B3">botton</button> -->
        </div>
        <div id="pageEight" align="left" v-if="$route.params.num == 'page8'">
          <!-- <button class="btn" @click="goToRoute('exercise1')" id="page8B1">botton</button> -->
        </div>
        <div id="pageNine" align="left" v-if="$route.params.num == 'page9'">
          <!-- <button class="btn" @click="goToRoute('exercise18')" id="page9B1">botton</button> <br> -->
        </div>
        <div id="pageTen" align="left" v-if="$route.params.num == 'page10'">
          <!-- <button class="btn" @click="goToRoute('exercise19')" id="page10B1">botton</button> <br> -->
        </div>
        <!-- MODALS -->
        <b-modal ref="activities-list" centered hide-footer title="Actividades">
          <b-row class="text-center">
            <b-col v-for="(subtopic, i, index) in subtopics" v-bind:key="i"  v-bind:index="index">
              <b-button class="btnExercise" v-on:click="goToRoute(subtopic.image)">
                <font-awesome-icon  icon="puzzle-piece"/><br>Actividad {{ index + 1 }}
              </b-button>
            </b-col>
          </b-row>
        </b-modal>
      </div>
  </div>
</template>

<script>
import HeaderPage from './HeaderPage'
import themesJSON from '@/assets/json/themes.json'
export default {
  name: 'Page',
  components: {'headerPage': HeaderPage},
  data(){
    return {
      themes: [],
      temas: [],
      subtopics: []
    }
  },
  mounted: function(){
    this.themes = themesJSON;
    
    this.temas = [];
    var max = Object.keys(this.themes).length;
    for (var i = 0; i < max; i++) {
      var dato = this.themes[i];
      this.temas.push(dato);
    }
  },
  methods: {
    goToRoute (exercise) {
      this.$router.push({name: exercise})
    },
    openActivity(){
      this.subtopics  = [];
      this.subtopics = this.temas.find(t => t.image == this.$route.params.num).subtopics;
      this.$refs['activities-list'].show();
    }
  }
}
</script>

<style scoped>
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen
    and (min-device-width : 320px)
    and (max-device-width : 780px) {}
  /* Smartphones (landscape) ----------- */
  @media only screen
    and (min-width : 320px) {
      #pageOne, #pageTwo, #pageThree, #pageFour, #pageFive, #pageSix, #pageSeven, #pageEight, #pageNine, #pageTen{
        width: 100%;
        height: 20rem;
      }
      /* BUTTONS PAGE 1 */
      #page1B1 {
        width: 140px;
        height: 10px;
        margin-left: 10%;
        margin-top: 12%;
      }
      #page1B2 {
        width: 100px;
        height: 10px;
        margin-left: 10%;
        margin-top: 27%;
      }
      #page1B3 {
        width: 120px;
        height: 5px;
        margin-left: 10%;
        margin-top: 34%;
      }
      /* BUTTONS PAGE 2 */
      #page2B1 {
        width: 170px;
        height: 10px;
        margin-left: 11%;
        margin-top: 15%;
      }
      #page2B2 {
        width: 120px;
        height: 10px;
        margin-left: 11%;
        margin-top: 27%;
      }
      #page2B3 {
        width: 190px;
        height: 20px;
        margin-left: 11%;
        margin-top: 28%;
      }
      /* BUTTONS PAGE 3 */
      #page3B1 {
        width: 200px;
        height: 20px;
        margin-left: 10%;
        margin-top: 17%;
      }
      #page3B2 {
        width: 200px;
        height: 20px;
        margin-left: 10%;
        margin-top: 32%;
      }
      /* BUTTONS PAGE 4 */
      #page4B1 {
        width: 170px;
        height: 20px;
        margin-left: 10%;
        margin-top: 13%;
      }
      #page4B2 {
        width: 200px;
        height: 20px;
        margin-left: 10%;
        margin-top: 40%;
      }
      /* BUTTONS PAGE 5 */
      #page5B1 {
        width: 170px;
        height: 20px;
        margin-left: 10%;
        margin-top: 17%;
      }
      /* BUTTONS PAGE 6 */
      #page6B1 {
        width: 200px;
        height: 20px;
        margin-left: 11%;
        margin-top: 18%;
      }
      /* BUTTONS PAGE 7 */
      #page7B1 {
        width: 100px;
        height: 20px;
        margin-left: 9%;
        margin-top: 11%;
      }
      #page7B2 {
        width: 200px;
        height: 20px;
        margin-left: 9%;
        margin-top: 12%;
      }
      #page7B3 {
        width: 120px;
        height: 20px;
        margin-left: 9%;
        margin-top: 27%;
      }
      /* BUTTONS PAGE 8 */
      #page8B1 {
        width: 200px;
        height: 20px;
        margin-left: 9%;
        margin-top: 17%;
      }
      /* BUTTONS PAGE 9 */
      #page9B1 {
        width: 220px;
        height: 20px;
        margin-left: 11%;
        margin-top: 16%;
      }
      /* BUTTONS PAGE 10 */
      #page10B1 {
        width: 90px;
        height: 20px;
        margin-left: 10%;
        margin-top: 17%;
      }
    }
  /* Smartphones (portrait) ----------- */
  @media only screen
    and (min-width : 700px) {
      #pageOne, #pageTwo, #pageThree, #pageFour, #pageFive, #pageSix, #pageSeven, #pageEight, #pageNine, #pageTen{
        width: 100%;
        height: 40rem;
      }
      /* BUTTONS PAGE 1 */
      #page1B1 {
        width: 280px;
        height: 20px;
        margin-left: 10%;
        margin-top: 13%;
      }
      #page1B2 {
        width: 190px;
        height: 20px;
        margin-left: 10%;
        margin-top: 31%;
      }
      #page1B3 {
        width: 230px;
        height: 20px;
        margin-left: 10%;
        margin-top: 36%;
      }
      /* BUTTONS PAGE 2 */
      #page2B1 {
        width: 320px;
        height: 20px;
        margin-left: 11%;
        margin-top: 16%;
      }
      #page2B2 {
        width: 240px;
        height: 20px;
        margin-left: 11%;
        margin-top: 30%;
      }
      #page2B3 {
        width: 370px;
        height: 30px;
        margin-left: 11%;
        margin-top: 30%;
      }
      /* BUTTONS PAGE 3 */
      #page3B1 {
        width: 380px;
        height: 30px;
        margin-left: 10%;
        margin-top: 19%;
      }
      #page3B2 {
        width: 400px;
        height: 30px;
        margin-left: 10%;
        margin-top: 33%;
      }
      /* BUTTONS PAGE 4 */
      #page4B1 {
        width: 330px;
        height: 20px;
        margin-left: 10%;
        margin-top: 15%;
      }
      #page4B2 {
        width: 400px;
        height: 30px;
        margin-left: 10%;
        margin-top: 43%;
      }
      /* BUTTONS PAGE 5 */
      #page5B1 {
        width: 330px;
        height: 20px;
        margin-left: 10%;
        margin-top: 19%;
      }
      /* BUTTONS PAGE 6 */
      #page6B1 {
        width: 400px;
        height: 30px;
        margin-left: 11%;
        margin-top: 19%;
      }
      /* BUTTONS PAGE 7 */
      #page7B1 {
        width: 200px;
        height: 20px;
        margin-left: 9%;
        margin-top: 13%;
      }
      #page7B2 {
        width: 400px;
        height: 30px;
        margin-left: 9%;
        margin-top: 15%;
      }
      #page7B3 {
        width: 220px;
        height: 20px;
        margin-left: 9%;
        margin-top: 31%;
      }
      /* BUTTONS PAGE 8 */
      #page8B1 {
        width: 400px;
        height: 30px;
        margin-left: 9%;
        margin-top: 18%;
      }
      /* BUTTONS PAGE 9 */
      #page9B1 {
        width: 400px;
        height: 20px;
        margin-left: 11%;
        margin-top: 19%;
      }
      /* BUTTONS PAGE 10 */
      #page10B1 {
        width: 190px;
        height: 20px;
        margin-left: 10%;
        margin-top: 19%;
      }
    }
  /* iPads (portrait and landscape) ----------- */
  @media only screen
    and (min-device-width : 768px)
    and (max-device-width : 1024px) {
      #pageOne, #pageTwo, #pageThree, #pageFour, #pageFive, #pageSix, #pageSeven, #pageEight, #pageNine, #pageTen{
        width: 100%;
        height: 50rem;
      }
      /* BUTTONS PAGE 1 */
      #page1B1 {
        width: 300px;
        height: 30px;
      }
      #page1B2 {
        height: 30px;
        width: 250px;
      }
      #page1B3 {
        width: 260px;
        height: 30px;
      }
      /* BUTTONS PAGE 2 */
      #page2B1 {
        width: 350px;
        height: 30px;
      }
      #page2B2 {
        width: 260px;
        height: 30px;
      }
      #page2B3 {
        width: 430px;
        height: 35px;
      }
      /* BUTTONS PAGE 3 */
      #page3B1 {
        width: 430px;
        height: 50px;
      }
      #page3B2 {
        width: 450px;
        height: 50px;
      }
      /* BUTTONS PAGE 4 */
      #page4B1 {
        width: 380px;
        height: 30px;
      }
      #page4B2 {
        width: 450px;
        height: 45px;
      }
      /* BUTTONS PAGE 5 */
      #page5B1 {
        width: 390px;
        height: 30px;
      }
      /* BUTTONS PAGE 6 */
      #page6B1 {
        width: 450px;
        height: 45px;
      }
      /* BUTTONS PAGE 7 */
      #page7B1 {
        width: 200px;
        height: 30px;
      }
      #page7B2 {
        width: 450px;
        height: 40px;
      }
      #page7B3 {
        width: 230px;
        height: 30px;
      }
      /* BUTTONS PAGE 8 */
      #page8B1 {
        width: 440px;
        height: 50px;
      }
      /* BUTTONS PAGE 9 */
      #page9B1 {
        width: 460px;
      }
      /* BUTTONS PAGE 10 */
      #page10B1 {
        width: 200px;
        height: 30px;
      }
    }
  /* iPads (landscape) ----------- */
  @media only screen
    and (min-device-width : 768px)
    and (max-device-width : 1024px)
    and (orientation : landscape) {
      /* BUTTONS PAGE 1 */
      #page1B1 {
        margin-left: 18%;
        margin-top: 10%;
      }
      #page1B2 {
        margin-left: 18%;
        margin-top: 25%;
      }
      #page1B3 {
        margin-left: 18%;
        margin-top: 28%;
      }
      /* BUTTONS PAGE 2 */
      #page2B1 {
        margin-left: 20%;
        margin-top: 13%;
      }
      #page2B2 {
        margin-left: 20%;
        margin-top: 23%;
      }
      #page2B3 {
        margin-left: 20%;
        margin-top: 24%;
      }
      /* BUTTONS PAGE 3 */
      #page3B1 {
        margin-left: 18%;
        margin-top: 14%;
      }
      #page3B2 {
        margin-left: 18%;
        margin-top: 26%;
      }
      /* BUTTONS PAGE 4 */
      #page4B1 {
        margin-left: 18%;
        margin-top: 12%;
      }
      #page4B2 {
        margin-left: 18%;
        margin-top: 34%;
      }
      /* BUTTONS PAGE 5 */
      #page5B1 {
        margin-left: 18%;
        margin-top: 15%;
      }
      /* BUTTONS PAGE 6 */
      #page6B1 {
        margin-left: 19%;
        margin-top: 15%;
      }
      /* BUTTONS PAGE 7 */
      #page7B1 {
        margin-left: 19%;
        margin-top: 10%;
      }
      #page7B2 {
        margin-left: 19%;
        margin-top: 12%;
      }
      #page7B3 {
        margin-left: 19%;
        margin-top: 24%;
      }
      /* BUTTONS PAGE 8 */
      #page8B1 {
        margin-left: 20%;
        margin-top: 14%;
      }
      /* BUTTONS PAGE 9 */
      #page9B1 {
        margin-left: 23%;
        margin-top: 14%;
      }
      /* BUTTONS PAGE 10 */
      #page10B1 {
        margin-left: 19%;
        margin-top: 15%;
      }
    }
  /* iPads (portrait) ----------- */
  @media only screen
    and (min-device-width : 768px)
    and (max-device-width : 1024px)
    and (orientation : portrait) {
      /* BUTTONS PAGE 1 */
      #page1B1 {
        margin-left: 10%;
        margin-top: 18%;
      }
      #page1B2 {
        margin-left: 10%;
        margin-top: 30%;
      }
      #page1B3 {
        margin-left: 10%;
        margin-top: 35%;
      }
      /* BUTTONS PAGE 2 */
      #page2B1 {
        margin-left: 11%;
        margin-top: 21%;
      }
      #page2B2 {
        margin-left: 11%;
        margin-top: 29%;
      }
      #page2B3 {
        margin-left: 11%;
        margin-top: 29%;
      }
      /* BUTTONS PAGE 3 */
      #page3B1 {
        margin-left: 10%;
        margin-top: 22%;
      }
      #page3B2 {
        margin-left: 10%;
        margin-top: 32%;
      }
      /* BUTTONS PAGE 4 */
      #page4B1 {
        margin-left: 10%;
        margin-top: 20%;
      }
      #page4B2 {
        margin-left: 10%;
        margin-top: 42%;
      }
      /* BUTTONS PAGE 5 */
      #page5B1 {
        margin-left: 10%;
        margin-top: 24%;
      }
      /* BUTTONS PAGE 6 */
      #page6B1 {
        margin-left: 11%;
        margin-top: 24%;
      }
      /* BUTTONS PAGE 7 */
      #page7B1 {
        margin-left: 10%;
        margin-top: 18%;
      }
      #page7B2 {
        margin-left: 10%;
        margin-top: 13%;
      }
      #page7B3 {
        margin-left: 10%;
        margin-top: 31%;
      }
      /* BUTTONS PAGE 8 */
      #page8B1 {
        margin-left: 10%;
        margin-top: 22%;
      }
      /* BUTTONS PAGE 9 */
      #page9B1 {
        margin-left: 12%;
        margin-top: 23%;
      }
      /* BUTTONS PAGE 10 */
      #page10B1 {
        margin-left: 10%;
        margin-top: 24%;
      }
    }
  /* Desktops and laptops ----------- */
  @media only screen
    and (min-width : 1224px) {
      /* DIVS */
      #pageOne, #pageTwo, #pageThree, #pageFour, #pageFive, #pageSix, #pageSeven, #pageEight, #pageNine, #pageTen{
        width: 100%;
        height: 80rem;
      }
      /* BUTTONS PAGE 1 */
      #page1B1 {
        margin-left: 12%;
        margin-top: 13%;
        width: 550px;
        height: 35px;
      }
      #page1B2 {
        margin-left: 12%;
        margin-top: 30%;
        width: 390px;
        height: 35px;
      }
      #page1B3 {
        margin-left: 12%;
        margin-top: 36%;
        width: 460px;
        height: 35px;
      }
      /* BUTTONS PAGE 2 */
      #page2B1 {
        margin-left: 13%;
        margin-top: 16%;
        width: 610px;
        height: 35px;
      }
      #page2B2 {
        margin-left: 13%;
        margin-top: 29%;
        width: 790px;
        height: 55px;
      }
      #page2B3 {
        margin-left: 13%;
        margin-top: 33%;
        width: 730px;
        height: 55px;
      }
      /* BUTTONS PAGE 3 */
      #page3B1 {
        margin-left: 12%;
        margin-top: 18%;
        width: 740px;
        height: 55px;
      }
      #page3B2 {
        margin-left: 12%;
        margin-top: 33%;
        width: 750px;
        height: 60px;
      }
      /* BUTTONS PAGE 4 */
      #page4B1 {
        margin-left: 12%;
        margin-top: 15%;
        width: 620px;
        height: 35px;
      }
      #page4B2 {
        margin-left: 12%;
        margin-top: 42%;
        width: 770px;
        height: 60px;
      }
      /* BUTTONS PAGE 5 */
      #page5B1 {
        margin-left: 12%;
        margin-top: 18%;
        width: 640px;
        height: 35px;
      }
      /* BUTTONS PAGE 6 */
      #page6B1 {
        margin-left: 13%;
        margin-top: 19%;
        width: 770px;
        height: 60px;
      }
      /* BUTTONS PAGE 7 */
      #page7B1 {
        margin-left: 12%;
        margin-top: 13%;
        height: 35px;
        width: 350px;
      }
      #page7B2 {
        margin-left: 12%;
        margin-top: 15%;
        width: 770px;
        height: 60px;
      }
      #page7B3 {
        margin-left: 12%;
        margin-top: 30%;
        height: 35px;
        width: 400px;
      }
      /* BUTTONS PAGE 8 */
      #page8B1 {
        margin-left: 12%;
        margin-top: 18%;
        width: 770px;
        height: 60px;
      }
      /* BUTTONS PAGE 9 */
      #page9B1 {
        margin-left: 14%;
        margin-top: 19%;
        width: 790px;
        height: 35px;
      }
      /* BUTTONS PAGE 10 */
      #page10B1 {
        margin-left: 11%;
        margin-top: 19%;
        width: 350px;
        height: 35px;
      }
    }
  /* Large screens ----------- */
  @media only screen
    and (min-width : 1824px) {
    /* Styles */
    }
  #page1B1, #page1B2, #page1B3, #page2B1, #page2B2, #page2B3, #page3B1, #page3B2,
  #page4B1, #page4B2, #page5B1, #page5B2, #page6B1, #page7B1, #page7B2, #page7B3,
  #page8B1, #page9B1, #page9B2, #page10B1, #page10B2 {
    color: transparent;
    background-size: 100%;
    border: 2px solid red;
    border-radius: 50%;
  }
  #pageOne {
    background: url('../assets/pages/page1.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageTwo {
    background: url('../assets/pages/page2.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageThree {
    background: url('../assets/pages/page3.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageFour {
    background: url('../assets/pages/page4.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageFive {
    background: url('../assets/pages/page5.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageSix {
    background: url('../assets/pages/page6.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageSeven {
    background: url('../assets/pages/page7.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageEight {
    background: url('../assets/pages/page8.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageNine {
    background: url('../assets/pages/page9.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  #pageTen {
    background: url('../assets/pages/page10.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
