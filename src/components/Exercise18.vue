<template>
    <div>
        <MyHeader :page="'page9'"></MyHeader>
        <div id="divContent" class="container">
          <div class="contenido-titulo">
            <h1 class="titulo-ejercicios">LISTENING
              <br>Countable and Uncountable Nouns, Verbs to Have and Simple Present</h1>
          </div>
            <p class="instrucciones">
              <b class="numero-vineta">1.</b>
              <font-awesome-icon id="iconPlay" icon="play-circle"/> 
              Listen and order the ingredients as they are mentioned. Circle C (countable) or U (uncountable).
            </p>
            <audio controls>
              <source src="../assets/audios/exercise18.mp3">
            </audio>
            <hr>
            <b-row>
                <b-col sm="3" v-for="(option, i) in options" v-bind:key="i">
                    <img :src="require(`@/assets/imgs/exercise18/${option.text}.jpg`)" :alt="option.image">
                    <br>
                    {{ option.text }}
                    <b-row >
                        <b-col><input id="inpExc18" type="text" placeholder="#" :pattern="option.answer1"></b-col>
                        <b-col><input id="inpExc18" type="text" placeholder="C/U" :pattern="option.answer2"></b-col>
                    </b-row>
                </b-col>
            </b-row>
            <hr>
            <p class="instrucciones">
                <b class="numero-vineta">2.  </b> Listen again and complete. Compare with a partner. Check against the text in the scripts section.
            </p>
            <ol class="text-left">
              <li>We need milk. Do you have <input type="text" pattern="any">? Yes, I have <input type="text" pattern="a lot of"> milk.</li>
              <li>I need eggs. I also have <input type="text" pattern="many">.</li>
              <li>I have <input type="text" pattern="some"> flour, too.</li>
              <li>Do you have <input type="text" pattern="any"> apples?</li>
              <li>No, but I have <input type="text" pattern="a few"> peaches. How many do you want?</li>
              <li>I need three peaches and <input type="text" pattern="some">sugar.</li>
              <li>I don’t have <input type="text" pattern="any"> sugar, but I have <input type="text" pattern="some"> honey.</li>
              <li>No problem, <input type="text" pattern="some"> honey is OK. Do you have <input type="text" pattern="any"> cottage cheese?</li>
              <li>Oops! I have a <input type="text" pattern="a little">.</li>
            </ol>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise18 from '@/assets/json/exercise18.json'
export default {
  name: 'Exercise18',
  components: {'MyHeader': Header},
  data () {
    return {
      sentences: [],
      opciones: exercise18,
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
          text: this.opciones[numAlet].text,
          answer1: this.opciones[numAlet].answer1,
          answer2: this.opciones[numAlet].answer2
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
    #inpExc18 {
        width: 40px;
    }
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
</style>
