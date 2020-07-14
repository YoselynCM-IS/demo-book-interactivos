<template>
  <div>
    <MyHeader :page="'page8'"></MyHeader>
    <div id="divContent" class="container">
      <div class="contenido-titulo">
        <h1 class="titulo-ejercicios">LISTENING<br>Food</h1>
      </div>
      <p class="instrucciones">
        <b class="numero-vineta">1. </b>
        <font-awesome-icon id="iconPlay" icon="play-circle"/>
        Match each food word to its corresponding picture as you listen. Are there any similar words to Spanish? Tick ( <span class="color-paloma">✓</span> ) the food you like. Drag the number to the corresponding box.
      </p>
      <div class="multimedia">
        <audio controls>
          <source src="../assets/audios/exercise1.mp3">
        </audio>
      </div>
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div v-for="(option, item) in options" v-bind:key="item" id="elements">
              <div class="row">
                <div class="col-sm-12" id="numberElem">
                  <drag v-if="option.status" class="drag" :transfer-data="{ answer: option.option }">
                    <button class="btn" @click="touchSelect(option, item)">{{ option.number }}</button>
                  </drag>
                  <p v-else id="numberDisa">{{ option.number }}</p>
                </div>
                <div>
                  <img v-if="option.status" :src="require(`@/assets/imgs/exercise1/${option.option}.jpg`)" alt=""/>
                  <img v-else :src="require(`@/assets/imgs/exercise1/${option.option}.jpg`)" id="select" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div v-for="(answer, item) in answers" v-bind:key="item">
            <div class="row">
              <div class="col-sm-4">
                <drop class="drop" @dragover="assign(answer, item)" @dragleave="selection = {}" @drop="handleDrop">
                  <button class="btn" v-if="!answer.status" @click="touchAnswer(answer, item)"></button>
                  <p v-if="answer.status">{{ answer.number }}</p>
                </drop>
              </div>
              <div class="col-sm-8 text-left">{{ answer.answer }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import { Drag, Drop } from 'vue-drag-drop'
import exercise1 from '@/assets/json/exercise1.json'
export default {
  components: {Drag, Drop, 'MyHeader': Header},
  name: 'Exercise37One',
  data () {
    return {
      count: 0,
      selection: {number: null, answer: '', status: false, i: null},
      positions: [],
      opciones: exercise1,
      dates: {},
      options: [],
      answers: [],
      dataOpt: {}
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    touchSelect (option, item) {
      this.dataOpt.number = option.number
      this.dataOpt.option = option.option
      this.dataOpt.status = option.status
      this.dataOpt.item = item
    },
    touchAnswer (answer, item) {
      if (answer.answer === this.dataOpt.option) {
        this.options.forEach(option => {
          if (option.number === this.dataOpt.number) {
            option.status = false
            this.count += 1
          }
        })
        this.answers[item].status = true
        if (this.count === 19) {
          this.$swal('Well done!', '', 'success')
        }
      } else {}
    },
    show () {
      var max = Object.keys(this.opciones).length
      var numAlet
      var i
      for (i = 0; i < max; i++) {
        numAlet = this.randomSent(max)
        this.dates = {
          number: this.opciones[numAlet].number,
          option: this.opciones[numAlet].option,
          status: this.opciones[numAlet].status
        }
        this.options.push(this.dates)
      }
      this.positions = []
      for (i = 0; i < max; i++) {
        numAlet = this.randomSent(max)
        this.dates = {
          number: this.opciones[numAlet].number,
          answer: this.opciones[numAlet].option,
          status: false
        }
        this.answers.push(this.dates)
      }
      this.positions = []
    },
    goHome () {
      this.$router.push({name: 'home'})
    },
    handleDrop (data) {
      if (data.answer === this.selection.answer) {
        this.options.forEach(option => {
          if (option.number === this.selection.number) {
            option.status = false
            this.count += 1
          }
        })
        this.answers[this.selection.i].status = true
        if (this.count === 19) {
          this.$swal('Well done!', '', 'success')
        }
      } else {}
    },
    assign (answer, item) {
      this.selection = {
        number: answer.number,
        answer: answer.answer,
        status: false,
        i: item
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
