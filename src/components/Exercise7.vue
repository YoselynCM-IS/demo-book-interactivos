<template>
  <div>
    <MyHeader :page="'page1'"></MyHeader>
    <div id="divContent" class="container">
      <div class="contenido-titulo">
        <h1 class="titulo-ejercicios">
          LISTENING<br>
          Basic Vocabulary and Verb <i>to Be</i></h1>
      </div>
      <p class="instrucciones">
        <b class="numero-vineta">1.</b>
        <font-awesome-icon id="iconPlay" icon="play-circle"/> Number the sentences as you listen.
      </p>
      <div class="multimedia">
        <audio controls>
            <source src="../assets/audios/exercise7.mp3">
        </audio>
      </div>
      <div class="contenido-e7">
        <ul type="a">
          <li v-for="(sentence, i) in sentences" v-bind:key="i">
            <b-row class="text-left">
              <b-col>{{ sentence.sentence }}</b-col>
              <b-col><input id="tdNExc7" type="text" :pattern="sentence.number"></b-col>
            </b-row>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import exercise7 from '@/assets/json/exercise7.json'
export default {
  name: 'Exercise7',
  components: {'MyHeader': Header},
  data () {
    return {
      options: exercise7,
      sentences: [],
      dates: {},
      positions: []
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show () {
      var max = Object.keys(this.options).length
      for (var i = 0; i < max; i++) {
        var numAlet = this.randomSent(max)
        this.dates = {
          id: this.options[numAlet].id,
          sentence: this.options[numAlet].sentence,
          number: this.options[numAlet].number
        }
        this.sentences.push(this.dates)
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
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
    #tdNExc7 {
        width: 40px;
    }
</style>
