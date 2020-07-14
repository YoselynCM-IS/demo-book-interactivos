<template>
    <div>
        <MyHeader :page="'page2'"></MyHeader>
        <div id="divContent" class="container">
            <div class="contenido-titulo">
                <h1 class="titulo-ejercicios">LISTENING AND READING
                  <br>Greetings and Introductions, Possessive Adjectives and Adjectives</h1>
            </div>
            <p class="instrucciones">
                <b class="numero-vineta">1. </b>
                <font-awesome-icon id="iconPlay" icon="play-circle"/> 
                Listen to the dialogue. Write the greeting and farewell expressions.
            </p>
            <div class="multimedia">
                <audio controls>
                    <source src="../assets/audios/exercise8.mp3">
                </audio>
            </div>
            <b-card>
                <b-row>
                    <b-col v-for="(option, i) in options" v-bind:key="i">
                        <drag class="drag" :transfer-data="{ value: option }">
                            <button class="btn" @click="touchSelect(option)">{{ option }}</button>
                        </drag>
                    </b-col>
                </b-row>
            </b-card>
            <br>
            <hr>
            <div class="table-responsive">
                <table class="table">
                    <thead ref="head">
                      <tr>
                          <th scope="col"></th>
                          <th scope="col">Greeting</th>
                          <th scope="col"></th>
                          <th scope="col">Farewell</th>
                          <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(name, i) in names" v-bind:key="i" align="left">
                        <td>{{ name.name }}:</td>
                        <td>
                            <drop class="drop classDrop8" @dragover="assign(name, i)" @dragleave="selection = {}" @drop="handleDrop1">
                                <button id="btnDrop" class="btn" @click="touchAnswer1(i)"><p>{{ name.ansgreeting }}</p></button>
                            </drop>
                        </td>
                        <td>
                            <b-button id="btnDel8" :disabled="name.ansgreeting == ''" variant="secondary" @click="deleteGreet(i)"><font-awesome-icon icon="minus"/></b-button>
                        </td>
                        <td>
                            <drop class="drop classDrop8" @dragover="assign(name, i)" @dragleave="selection = {}" @drop="handleDrop2">
                                <button id="btnDrop" class="btn" @click="touchAnswer2(i)"><p>{{ name.ansfarewell }}</p></button>
                            </drop>
                        </td>
                        <td>
                            <b-button id="btnDel8" :disabled="name.ansfarewell == ''" variant="secondary" @click="deleteFare(i)"><font-awesome-icon icon="minus"/></b-button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="text-right">
                <b-button class="btn btn-evaluar-tf" variant="primary" @click="onEvaluate"><font-awesome-icon icon="check-circle"  />  Check</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise81 from '@/assets/json/exercise8-1.json'
import exercise82 from '@/assets/json/exercise8-2.json'
export default {
  name: 'Exercise8',
  components: {'MyHeader': Header},
  data () {
    return {
      sentences: exercise81,
      positions: [],
      options: [],
      exercises: exercise82,
      names: [],
      selection: {},
      count: 0,
      dates: {},
      fields: [{ key: 'name', label: '' }, 'geeting', 'farewell'],
      dataOpt: ''
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    touchSelect (answer) {
      this.dataOpt = answer
    },
    touchAnswer1 (i) {
      var select = this.names[i].ansgreeting
      this.names[i].ansgreeting = select + this.dataOpt
    },
    touchAnswer2 (i) {
      var select = this.names[i].ansfarewell
      this.names[i].ansfarewell = select + this.dataOpt
    },
    onEvaluate () {
      var corrects = 0
      var max = Object.keys(this.names).length
      for (const n in this.names) {
        if (this.names[n].ansgreeting === this.names[n].greeting) {
          corrects += 1
        }
        if (this.names[n].ansfarewell === this.names[n].farewell) {
          corrects += 1
        }
      }
      if (corrects === (max * 2)) {
        this.$swal('Well done!', '', 'success')
      } else {
        this.$swal('Try again', '', 'error')
        for (const n in this.names) {
          this.names[n].ansgreeting = ''
          this.names[n].ansfarewell = ''
        }
      }
    },
    deleteGreet (i) {
      this.names[i].ansgreeting = ''
    },
    deleteFare (i) {
      this.names[i].ansfarewell = ''
    },
    show () {
      var max1 = Object.keys(this.sentences).length
      var i
      for (i = 0; i < max1; i++) {
        this.options.push(this.sentences[this.randomSent(max1)].sentence)
      }
      this.positions = []
      var max2 = Object.keys(this.exercises).length
      for (i = 0; i < max2; i++) {
        var numAlet = this.randomSent(max2)
        this.dates = {
          id: this.exercises[numAlet].id,
          name: this.exercises[numAlet].name,
          greeting: this.exercises[numAlet].greeting,
          ansgreeting: this.exercises[numAlet].ansgreeting,
          farewell: this.exercises[numAlet].farewell,
          ansfarewell: this.exercises[numAlet].ansfarewell
        }
        this.names.push(this.dates)
      }
      this.positions = []
    },
    handleDrop1 (data) {
      var select = this.names[this.selection.i].ansgreeting
      this.names[this.selection.i].ansgreeting = select + data.value
    },
    handleDrop2 (data) {
      var select = this.names[this.selection.i].ansfarewell
      this.names[this.selection.i].ansfarewell = select + data.value
    },
    assign (answer, item) {
      this.selection = {
        id: answer.id,
        greeting: answer.greeting,
        farewell: answer.farewell,
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

<style scoped>
    .classDrop8 {
        width: 300px;
    }
    #btnDel8 {
        border-radius: 25px;
        width: 40px;
        height: 40px;
        font-size: 15px;
    }
    #btnDrop {
        width: 100%;
    }
</style>
