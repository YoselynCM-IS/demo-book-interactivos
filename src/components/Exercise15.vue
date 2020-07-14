<template>
    <div>
        <MyHeader :page="'page3'"></MyHeader>
        <div id="divContent" class="container">
            <div class="contenido-titulo">
                <h1 class="titulo-ejercicios">LISTENING AND WRITING
                  <br>Clock and Days of the Week</h1>
            </div>
            <p class="instrucciones">
                <b class="numero-vineta">1.  </b>
                <font-awesome-icon id="iconPlay" icon="play-circle"/> 
                What time is it? Match each clock with the corresponding way or ways to express time.
    Write the appropriate letter under each clock. Listen and check your answers.
            </p>
            <audio controls>
            <source src="../assets/audios/exercise15.mp3">
            </audio>
            <hr>
            <b-row class="text-center">
                <b-col v-for="(option, i) in options" v-bind:key="i">
                    <!-- require(`@/assets/imgs/exercise15/${option.watch}.jpg`) -->
                    <img class="img-e15" :src="require(`@/assets/imgs/exercise15/${option.watch}.png`)" :alt="option.watch">
                    <br>
                    <input id="inpExc15" type="text" :pattern="option.answer">
                </b-col>
            </b-row>
            <hr>
            <div align="left">
                <ol type="a">
                    <li v-for="(answer, i) in answers" v-bind:key="i">
                      {{ answer.form1 }}
                      <label v-if="answer.form2 !== ''">/ {{ answer.form2 }}</label>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise151 from '@/assets/json/exercise15-1.json'
import exercise152 from '@/assets/json/exercise15-2.json'
export default {
  name: 'Exercise14',
  components: {'MyHeader': Header},
  data () {
    return {
      opciones: exercise151,
      options: [],
      positions: [],
      dates: {},
      respuestas: exercise152,
      answers: exercise152
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show () {
      var max1 = Object.keys(this.opciones).length
      // exercise-15-1
      for (var i = 0; i < max1; i++) {
        var numAlet = this.randomSent(max1)
        this.dates = {
          watch: this.opciones[numAlet].watch,
          answer: this.opciones[numAlet].answer
        }
        this.options.push(this.dates)
      }
      this.positions = []
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
    #inpExc15 {
        width: 50px;
    }
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
    .img-e15{
        width: 150px;
        height: 150px;
    }
</style>
