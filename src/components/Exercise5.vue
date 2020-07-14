<template>
  <div>
    <MyHeader :page="'page4'"></MyHeader>
    <div class="container">
      <div class="contenido-titulo">
        <h1 class="titulo-ejercicios">LISTENING<br>Holidays, Likes and Dislikes</h1>
      </div>
      <p class="instrucciones">
        <b class="numero-vineta">1. </b>
        <font-awesome-icon id="iconPlay" icon="play-circle"/>
        Listen to the conversation. Choose the celebration they are talking about.
      </p>
      <div class="multimedia">
        <audio controls>
          <source src="../assets/audios/exercise5.mp3">
        </audio>
      </div>
      <div class="row">
        <div class="col-md-4"  v-for="(celebration, i) in celebrations" v-bind:key="i" >
          <button class="btn" @click="selectImage(celebration, i)"><img id="imgExc5" :src="require(`@/assets/imgs/exercise5/${celebration.image}.svg`)" :alt="celebration.answer"></button>
        </div>
      </div>
      <hr>
      <p class="instrucciones">
        <b class="numero-vineta">2. </b>Listen again. Match the pictures to the words.
      </p>
      <b-card>
        <b-row>
          <b-col v-for="(image, i) in images" v-bind:key="i" align="center">
            <img class="img-e5-2" :src="require(`@/assets/imgs/exercise5/${image.answer}.svg`)" :alt="image.answer">
            <drop
              :id="`boxDrop5-${i}`"
              class="drop classDrop5"
              @dragover="assign(image, i)"
              @dragleave="selection = {}"
              @drop="handleDrop">
                <button id="btnDrop" class="btn" @click="touchAnswer(i)"><p>{{ image.selected }}</p></button>
            </drop>
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <b-row>
            <b-col class="palabrase5" v-for="(sentence, i) in sentences" v-bind:key="i">
              <drag class="drag" :transfer-data="{ option: sentence.answer }">
                <button class="btn" @click="touchSelect(sentence)">{{ sentence.answer }}</button>
              </drag>
            </b-col>
        </b-row>
      </b-card>
      <div align="right">
        <button class="btn btn-finish" @click="onEvaluate()"><font-awesome-icon icon="check-circle"  />  Check</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import exercise51 from '@/assets/json/exercise5-1.json'
import exercise52 from '@/assets/json/exercise5-2.json'
import exercise53 from '@/assets/json/exercise5-3.json'
export default {
  name: 'Exercise5',
  components: {'MyHeader': Header},
  data () {
    return {
      options1: exercise51,
      options2: exercise52,
      options3: exercise53,
      sentences: [],
      images: [],
      celebrations: [],
      selection: {
        answer: '',
        position: 0
      },
      dates1: {},
      dates2: {},
      dates3: [],
      count: 0,
      corrects: 0,
      positions: [],
      dataOpt: {}
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    touchSelect (sentence) {
      this.dataOpt.answer = sentence.answer
    },
    touchAnswer (i) {
      this.images[i].selected = this.dataOpt.answer
    },
    selectImage (celebration, i) {
      if (celebration.state) {
        this.$swal('Well done!', '', 'success')
      } else {
        this.$swal('Try again', '', 'error')
      }
    },
    show () {
      var max1 = Object.keys(this.options1).length
      var max2 = Object.keys(this.options2).length
      var max3 = Object.keys(this.options3).length
      var i
      for (i = 0; i < max1; i++) {
        var numAlet1 = this.randomSent(max1)
        this.dates1 = {
          id: this.options1[numAlet1].id,
          answer: this.options1[numAlet1].answer,
          state: this.options1[numAlet1].state
        }
        this.sentences.push(this.dates1)
      }
      this.positions = []
      for (i = 0; i < max2; i++) {
        var numAlet2 = this.randomSent(max2)
        this.dates2 = {
          id: this.options2[numAlet2].id,
          answer: this.options2[numAlet2].answer,
          selected: this.options2[numAlet2].selected,
          state: this.options2[numAlet2].state
        }
        this.images.push(this.dates2)
      }
      this.positions = []
      for (i = 0; i < max3; i++) {
        var numAlet3 = this.randomSent(max3)
        this.dates3 = {
          id: this.options3[numAlet3].id,
          answer: this.options3[numAlet3].answer,
          image: this.options3[numAlet3].image,
          state: this.options3[numAlet3].state
        }
        this.celebrations.push(this.dates3)
      }
      this.positions = []
    },
    handleDrop (data) {
      this.images[this.selection.position].selected = data.option
    },
    assign (image, i) {
      this.selection.answer = image.answer
      this.selection.position = i
      this.sentences[i].state = true
    },
    onEvaluate () {
      this.count = 0
      for (const i in this.images) {
        if (this.images[i].selected !== '') {
          this.count += 1
        }
      }
      if (this.count === Object.keys(this.images).length) {
        this.corrects = 0
        for (const i in this.images) {
          document.getElementById(`boxDrop5-${i}`).style.borderColor = '#c1c1c1'
          if (this.images[i].selected === this.images[i].answer) {
            this.corrects += 1
          } else {
            document.getElementById(`boxDrop5-${i}`).style.borderColor = 'red'
          }
        }
        if (this.corrects === 4) {
          this.$swal('Well done!', '', 'success')
        }
      }
    },
    randomSent (max) {
      if (this.positions.length !== max) {
        var repe
        while (repe !== false) {
          var aleatorio = Math.floor(Math.random() * (max - 0) + 0)
          repe = this.repeated(aleatorio, max)
        }
        this.positions.push(aleatorio)
        return aleatorio
      }
    },
    repeated (num, max) {
      var repet = false
      for (var i = 0; i < max; i++) {
        if (num === this.positions[i]) {
          repet = true
        }
      }
      return repet
    }
  }
}
</script>

<style scoped>
#imgExc5{
  padding: 0px;
  margin: 0px;
  width: 300px;
  height: 199px;
}
.img-e5-2{
  margin-top:1rem;
  width: 206px;
  height: 168px;
}
#btnDrop {
  width: 100%;
}
</style>
