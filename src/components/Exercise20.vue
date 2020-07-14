<template>
    <div>
        <MyHeader :page="'page8'"></MyHeader>
        <div id="divContent" class="container">
            <!-- <div class="contenido-titulo">
                <h1 class="titulo-ejercicios">COMPLETAR TEXTO</h1>
            </div> -->
            <p class="instrucciones">
                <b class="numero-vineta">1. </b>Unscramble the words to form correct statements or questions.
            </p>
            <div align="left">
                <ol>
                    <li v-for="(option, i) in options" v-bind:key="i">
                        {{ option.words }} <br>
                        <div v-if="option.id == 1">
                            <input id="inpExe20" type="text" pattern="What’s">
                            <input id="inpExe20" type="text" pattern="she">
                            <input id="inpExe20" type="text" pattern="doing">
                            <input id="inpExe20" type="text" pattern="?">
                        </div>
                        <div v-if="option.id == 2">
                            <input id="inpExe20" type="text" pattern="Are">
                            <input id="inpExe20" type="text" pattern="you">
                            <input id="inpExe20" type="text" pattern="going">
                            <input id="inpExe20" type="text" pattern="dancing">
                            <input id="inpExe20" type="text" pattern="tonight">
                            <input id="inpExe20" type="text" pattern="?">
                        </div>
                        <div v-if="option.id == 3">
                            <input id="inpExe20" type="text" pattern="My">
                            <input id="inpExe20" type="text" pattern="dad">
                            <input id="inpExe20" type="text" pattern="is">
                            <input id="inpExe20" type="text" pattern="fixing">
                            <input id="inpExe20" type="text" pattern="the">
                            <input id="inpExe20" type="text" pattern="front">
                            <input id="inpExe20" type="text" pattern="door">
                            <input id="inpExe20" type="text" pattern=".">
                        </div>
                        <div v-if="option.id == 4">
                            <input id="inpExe20" type="text" pattern="Alfredo">
                            <input id="inpExe20" type="text" pattern="is">
                            <input id="inpExe20" type="text" pattern="getting">
                            <input id="inpExe20" type="text" pattern="married">
                            <input id="inpExe20" type="text" pattern="next">
                            <input id="inpExe20" type="text" pattern="month">
                            <input id="inpExe20" type="text" pattern="!">
                        </div>
                        <div v-if="option.id == 5">
                            <input id="inpExe20" type="text" pattern="I">
                            <input id="inpExe20" type="text" pattern="am">
                            <input id="inpExe20" type="text" pattern="listening">
                            <input id="inpExe20" type="text" pattern="to">
                            <input id="inpExe20" type="text" pattern="music">
                            <input id="inpExe20" type="text" pattern=".">
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise20 from '@/assets/json/exercise20.json'
export default {
  name: 'Exercise20',
  components: {'MyHeader': Header},
  data () {
    return {
      opciones: exercise20,
      options: [],
      positions: [],
      dates: {}
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show () {
      var max = Object.keys(this.opciones).length
      for (var i = 0; i < max; i++) {
        var numAlet = this.randomSent(max)
        this.dates = {
          id: this.opciones[numAlet].id,
          words: this.opciones[numAlet].words
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
    #inpExe20 {
        width: 100px;
    }
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
</style>
