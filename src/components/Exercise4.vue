<template>
  <div>
    <MyHeader :page="'page7'"></MyHeader>
    <div id="divContent" class="container">
      <div class="contenido-titulo">
        <h1 class="titulo-ejercicios">LISTENING AND READING
          <br>These / this / that / those</h1>
      </div>
      <p class="instrucciones">
        <b class="numero-vineta">1. </b>
        <font-awesome-icon id="iconPlay" icon="play-circle"/>
        Listen again and circle T or F.
      </p>
      <div class="multimedia">
        <audio controls>
          <source src="../assets/audios/exercise4.mp3">
        </audio>
      </div>
      <hr>
      <table class="table table-responsive">
        <thead class="th-tf" ref="head">
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">True</th>
            <th scope="col">False</th>
          </tr>
        </thead>
        <tbody class="tbody-tf">
          <tr v-for="(sentence, index) in sentences" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td class="reactivos-tf" align="left">{{ sentence.sentence }}</td>
            <td class="radio-tf" align="center">
              <b-form-checkbox size="lg"
                v-model="sentence.selected"
                :id="`idt-${sentence.id}`"
                :name="`sent-${sentence.id}`"
                value="true"
                :state="sentence.state"
              ></b-form-checkbox>
            </td>
            <td class="radio-tf" align="center">
              <b-form-checkbox size="lg"
                v-model="sentence.selected"
                :id="`idf-${sentence.id}`"
                :name="`sent-${sentence.id}`"
                value="false"
                :state="sentence.state"
              ></b-form-checkbox>
            </td>
          </tr>
        </tbody>
      </table>
      <div align="right">
        <button class="btn btn-evaluar-tf" @click="onEvaluate"><font-awesome-icon icon="check-circle"  /> Check</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import exercise4 from '@/assets/json/exercise4.json'
export default {
  components: {'MyHeader': Header},
  name: 'Exercise4',
  data () {
    return {
      sentences: [],
      options: exercise4,
      positions: [],
      dates: {}
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    onEvaluate () {
      for (const i in this.sentences) {
        if (this.sentences[i].selected !== this.sentences[i].value) {
          this.sentences[i].state = false
        } else {
          this.sentences[i].state = true
        }
      }
    },
    show () {
      var max = Object.keys(this.options).length
      for (var i = 0; i < max; i++) {
        var numAlet = this.randomSent(max)
        this.dates = {
          id: this.options[numAlet].id,
          sentence: this.options[numAlet].sentence,
          value: this.options[numAlet].value,
          selected: this.options[numAlet].selected,
          state: this.options[numAlet].state
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
