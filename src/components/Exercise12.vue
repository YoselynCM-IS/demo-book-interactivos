<template>
    <div>
      <MyHeader :page="'page2'"></MyHeader>
      <div id="divContent" class="container">
        <div class="contenido-titulo">
          <h1 class="titulo-ejercicios">READING<br>Greetings and Introductions, Possessive Adjectives and Adjectives</h1>
        </div>
        <p class="instrucciones">
          <b class="numero-vineta">1.</b> Read the conversation and write the missing possessive adjectives. 
        </p>
        <div class="row">
        <div class="col-md-9">
          <table class="tabla-e9">
            <tbody align="left">
              <tr>
                <td valign="top" class="personaje"><b>Ana:</b></td>
                <td class="dialogo">Ouch!</td>
              </tr>
              <tr>
                <td valign="top" class="personaje"><b>Carlos:</b></td>
                <td class="dialogo">I’m sorry, are you OK?</td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input" ><b>Ana:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <p class="a">Yes, I’m OK, thanks. Look at this mess! Now, let’s find</p>
                    <drop v-if="!answers[0].status" class="drop b" @dragover="assign(0)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(0)"></button>
                    </drop>
                    <p v-else class="b"><b :style="`color: ${answers[0].text}`">{{ answers[0].text }}</b></p>
                    <p class="a">things, please.</p>
                </td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input"><b>Carlos:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <p class="a">This is </p>
                    <drop v-if="!answers[1].status" class="drop b" @dragover="assign(1)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(1)"></button>
                    </drop>
                    <p v-else class="b"><b :style="`color: ${answers[1].text}`">{{ answers[1].text }}</b></p>
                    <p class="a">pen.</p>
                </td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input"><b>Ana:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <p class="a">No! it’s not </p>
                    <drop v-if="!answers[2].status" class="drop b" @dragover="assign(2)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(2)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[2].text}`">{{ answers[2].text }}</b></p>
                    <p class="a">pen. </p>
                    <drop v-if="!answers[3].status" class="drop b" @dragover="assign(3)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(3)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[3].text}`">{{ answers[3].text }}</b></p>
                    <p class="a">pen is is blue and this is red.</p>
                    <!-- <drop v-if="!answers[4].status" class="drop b" @dragover="assign(4)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(4)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[4].text}`">{{ answers[4].text }}</b></p>
                    <p class="a">and this is </p>
                    <drop v-if="!answers[5].status" class="drop b" @dragover="assign(5)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(5)"></button>
                    </drop> -->
                    <!-- <p v-else class="b"><b  :style="`color: ${answers[5].text}`">{{ answers[5].text }}</b></p>
                    <p class="a">.</p> -->
                </td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input"><b>Carlos:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <p class="a">Look, two notebooks, but which is </p>
                    <drop v-if="!answers[6].status" class="drop b" @dragover="assign(6)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(6)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[6].text}`">{{ answers[6].text }}</b></p>
                    <p class="a">notebook?</p>
                </td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input"><b>Ana:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <drop v-if="!answers[7].status" class="drop b" @dragover="assign(7)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(7)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[7].text}`">{{ answers[7].text }}</b></p>
                    <p class="a">notebook is pink and </p>
                    <!-- <drop v-if="!answers[8].status" class="drop b" @dragover="assign(8)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(8)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[8].text}`">{{ answers[8].text }}</b></p> -->
                    <!-- <p class="a">and </p> -->
                    <drop v-if="!answers[9].status" class="drop b" @dragover="assign(9)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(9)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[9].text}`">{{ answers[9].text }}</b></p>
                    <p class="a">notebook is black. Ugh! And here’s </p>
                    <!-- <drop v-if="!answers[10].status" class="drop b" @dragover="assign(10)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(10)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[10].text}`">{{ answers[10].text }}</b></p> -->
                    <!-- <p class="a">. Ugh! And here’s </p> -->
                    <drop v-if="!answers[11].status" class="drop b" @dragover="assign(11)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(11)"></button></drop>
                    <p v-else class="b"><b  :style="`color: ${answers[11].text}`">{{ answers[11].text }}</b></p>
                    <!-- <drop v-if="!answers[12].status" class="drop b" @dragover="assign(12)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(12)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[12].text}`">{{ answers[12].text }}</b></p> -->
                    <p class="a">green dictionary.</p>
                </td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input"><b>Carlos:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <p class="a">Great! Here’s </p>
                    <drop v-if="!answers[13].status" class="drop b" @dragover="assign(13)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(13)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[13].text}`">{{ answers[13].text }}</b></p>
                    <!-- <drop v-if="!answers[14].status" class="drop b" @dragover="assign(14)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(14)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[14].text}`">{{ answers[14].text }}</b></p> -->
                    <p class="a">brown wallet; it’s </p>
                    <drop v-if="!answers[15].status" class="drop b" @dragover="assign(15)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(15)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[15].text}`">{{ answers[15].text }}</b></p>
                    <p class="a">favorite! Oh, </p>
                    <drop v-if="!answers[16].status" class="drop b" @dragover="assign(16)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(16)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[16].text}`">{{ answers[16].text }}</b></p>
                    <p class="a">USB is in pieces!</p>
                </td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input"><b>Ana:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <p class="a">Oops, I’m in trouble! This USB belongs to </p>
                    <drop v-if="!answers[17].status" class="drop b" @dragover="assign(17)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(17)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[17].text}`">{{ answers[17].text }}</b></p>
                    <p class="a">brother; it’s </p>
                    <drop v-if="!answers[18].status" class="drop b" @dragover="assign(18)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(18)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[18].text}`">{{ answers[18].text }}</b></p>
                    <p class="a">USB.</p>
                </td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input"><b>Carlos:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <p class="a">I’m sorry about the USB, but look, </p>
                    <drop v-if="!answers[19].status" class="drop b" @dragover="assign(19)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(19)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[19].text}`">{{ answers[19].text }}</b></p>
                    <p class="a">cell phones are OK.</p>
                </td>
              </tr>
              <tr>
                <td valign="top" class="personaje-input"><b>Ana:</b></td>
                <td valign="top" class="dialogo-input" id="blocktd">
                    <p class="a">Oh, no! Here comes </p>
                    <drop v-if="!answers[20].status" class="drop b" @dragover="assign(20)" @dragleave="selection = {}" @drop="handleDrop">
                      <button id="btnDrop" class="btn" @click="touchAnswer(20)"></button>
                    </drop>
                    <p v-else class="b"><b  :style="`color: ${answers[20].text}`">{{ answers[20].text }}</b></p>
                    <p class="a">brother!</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-3">
          <div v-for="(option, i) in options" v-bind:key="i">
            <drag class="drag" :transfer-data="{ value: option }" :style="`color: ${option.color}`">
                <button class="btn" @click="touchSelect(option.text)">{{ option.text }}</button>
            </drag>
            <br>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise121 from '@/assets/json/exercise12-1.json'
import exercise122 from '@/assets/json/exercise12-2.json'
export default {
  name: 'Exercise12',
  components: {'MyHeader': Header},
  data () {
    return {
      opciones: exercise121,
      options: [],
      selection: {},
      answers: exercise122,
      positions: [],
      dates: {},
      count: 0,
      dataOpt: ''
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    touchSelect (option) {
      this.dataOpt = option
    },
    touchAnswer (i) {
      var max = Object.keys(this.answers).length
      if (this.answers[i].text === this.dataOpt) {
        this.answers[i].status = true
        this.count += 1
      }
      if (this.count === max) {
        this.$swal('Well done!', '', 'success')
      }
    },
    show () {
      var max = Object.keys(this.opciones).length
      for (var i = 0; i < max; i++) {
        var numAlet = this.randomSent(max)
        this.dates = {
          text: this.opciones[numAlet].text,
          color: this.opciones[numAlet].color,
          answer: this.opciones[numAlet].answer
        }
        this.options.push(this.dates)
      }
      this.positions = []
    },
    handleDrop (data) {
      var max = Object.keys(this.answers).length
      if (data.value.answer === this.selection.text) {
        this.answers[this.selection.i].status = true
        this.count += 1
      }
      if (this.count === max) {
        this.$swal('Well done!', '', 'success')
      }
    },
    assign (i) {
      this.selection = {
        text: this.answers[i].text,
        i: i
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
  #blocktd .a, #blocktd .b {
    display: inline-block;
  }
  .drop {
    width: 70px;
  }
  .drag {
    width: 70px;
  }
  #btnDrop {
      width: 100%;
  }
</style>
