<template>
    <div>
        <MyHeader :page="'page2'"></MyHeader>
        <div id="divContent" class="container">
            <div class="contenido-titulo">
                <h1 class="titulo-ejercicios">READING<br>Greetings and Introductions, Possessive Adjectives and Adjectives</h1>
            </div>
            <p class="instrucciones">
                <b class="numero-vineta">1.</b> Read the text about Andrew and what he does to keep his body healthy. Choose an option and check it with your group.
            </p>
            <hr>
            <b-row>
                <b-col sm="9" >
                    <p class="completar-texto">
                        Andrew is a
                        <b-form-select id="selExc10" :state="selected[0].state" v-model="selected[0].select">
                          <b-form-select-option value="fat">fat</b-form-select-option>
                          <b-form-select-option value="short">short</b-form-select-option>
                          <b-form-select-option value="tall">tall</b-form-select-option>
                        </b-form-select>
                        man and has
                        <b-form-select id="selExc10" :state="selected[1].state" v-model="selected[1].select">
                          <b-form-select-option value="silly">silly</b-form-select-option>
                          <b-form-select-option value="strong">strong</b-form-select-option>
                          <b-form-select-option value="weak">weak</b-form-select-option>
                        </b-form-select>
                        muscles. He starts his day very early in the morning, at 6 o’clock. He eats a
                        <b-form-select id="selExc10" :state="selected[2].state" v-model="selected[2].select">
                          <b-form-select-option value="brown">brown</b-form-select-option>
                          <b-form-select-option value="greasy">greasy</b-form-select-option>
                          <b-form-select-option value="healthy">healthy</b-form-select-option>
                        </b-form-select>
                        breakfast and walks to the court. He exercises his head and arms first and then, the rest of his body. He does push-ups to get
                        <b-form-select id="selExc10" :state="selected[3].state" v-model="selected[3].select">
                          <b-form-select-option value="blond">blond</b-form-select-option>
                          <b-form-select-option value="fat">fat</b-form-select-option>
                          <b-form-select-option value="strong">strong</b-form-select-option>
                        </b-form-select>
                        arms, but he is not a gymnast, because he isn’t a
                        <b-form-select id="selExc10" :state="selected[4].state" v-model="selected[4].select">
                          <b-form-select-option value="short">short</b-form-select-option>
                          <b-form-select-option value="slim">slim</b-form-select-option>
                          <b-form-select-option value="funny">funny</b-form-select-option>
                        </b-form-select>
                        person. Finally, he exercises his legs. He has
                        <b-form-select id="selExc10" :state="selected[5].state" v-model="selected[5].select">
                          <b-form-select-option value="complicated">complicated</b-form-select-option>
                          <b-form-select-option value="flexible">flexible</b-form-select-option>
                          <b-form-select-option value="rigid">rigid</b-form-select-option>
                        </b-form-select>
                        legs, like a dancer, but he isn’t a dancer. After three hours of practice, Andrew takes a bath, eats a
                        <b-form-select id="selExc10" :state="selected[6].state" v-model="selected[6].select">
                          <b-form-select-option value="good">good</b-form-select-option>
                          <b-form-select-option value="orange">orange</b-form-select-option>
                          <b-form-select-option value="poor">poor</b-form-select-option>
                        </b-form-select>
                        lunch and goes to work where he works with a lot of students. He is very
                        <b-form-select id="selExc10" :state="selected[7].state" v-model="selected[7].select">
                          <b-form-select-option value="funny">funny</b-form-select-option>
                          <b-form-select-option value="responsible">responsible</b-form-select-option>
                          <b-form-select-option value="white">white</b-form-select-option>
                        </b-form-select>
                        ,
                        <b-form-select id="selExc10" :state="selected[8].state" v-model="selected[8].select">
                          <b-form-select-option value="boring">boring</b-form-select-option>
                          <b-form-select-option value="disciplined">disciplined</b-form-select-option>
                          <b-form-select-option value="sad">sad</b-form-select-option>
                        </b-form-select>
                        and a nice person, too.
                    </p>
                    <!-- <p class="completar-texto">
                        Andrew is a
                        <b-form-select id="selExc10" :state="selected[0].state" v-model="selected[0].select" :options="options"></b-form-select>
                        man and has
                        <b-form-select id="selExc10" :state="selected[1].state" v-model="selected[1].select" :options="options"></b-form-select>
                        muscles. He starts his day very early in the morning, at 6 o’clock. He eats a
                        <b-form-select id="selExc10" :state="selected[2].state" v-model="selected[2].select" :options="options"></b-form-select>
                        breakfast and walks to the court. He exercises his head and arms first and then, the rest of his body. He does push-ups to get
                        <b-form-select id="selExc10" :state="selected[3].state" v-model="selected[3].select" :options="options"></b-form-select>
                        arms, but he is not a gymnast, because he isn’t a
                        <b-form-select id="selExc10" :state="selected[4].state" v-model="selected[4].select" :options="options"></b-form-select>
                        person. Finally, he exercises his legs. He has
                        <b-form-select id="selExc10" :state="selected[5].state" v-model="selected[5].select" :options="options"></b-form-select>
                        legs, like a dancer, but he isn’t a dancer. After three hours of practice, Andrew takes a bath, eats a
                        <b-form-select id="selExc10" :state="selected[6].state" v-model="selected[6].select" :options="options"></b-form-select>
                        lunch and goes to work where he works with a lot of students. He is very
                        <b-form-select id="selExc10" :state="selected[7].state" v-model="selected[7].select" :options="options"></b-form-select>
                        ,
                        <b-form-select id="selExc10" :state="selected[8].state" v-model="selected[8].select" :options="options"></b-form-select>
                        and a nice person, too.
                    </p> -->
                </b-col>
                <b-col>
                    <img id="imgExe10" src="@/assets/imgs/exercise10/boy.svg" alt="">
                </b-col>
            </b-row>
            <div class="text-right">
                <button @click="onEvaluate()" class="btn btn-finish"><font-awesome-icon icon="check-circle"  />  Check</button>
            </div>
            <hr>
            <p><b>What is Andrew’s profession?</b></p>
            <b-card class="text-left">
                <b-row>
                    <b-col sm="4" v-for="(profession, i) in professions" v-bind:key="i">
                        <button class="btn btn-ejercicios" @click="onProfession(profession, i)">{{ profession.text }}</button>
                    </b-col>
                </b-row>
            </b-card>
            <hr>
            <div class="text-right">
                <button @click="onEvaluate()" class="btn btn-evaluar-tf"><font-awesome-icon icon="check-circle"  />  Check</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise101 from '@/assets/json/exercise10-1.json'
import exercise102 from '@/assets/json/exercise10-2.json'
import exercise103 from '@/assets/json/exercise10-3.json'
export default {
  name: 'Exercise10',
  components: {'MyHeader': Header},
  data () {
    return {
      opciones: exercise102,
      dates1: {},
      options: [],
      selected: exercise103,
      positions: [],
      professions: [],
      dates2: {},
      profesiones: exercise101,
      state: null
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    onProfession (profession, i) {
      if (profession.value) {
        this.$swal('Well done!', '', 'success')
      } else {
        this.$swal('Try again', '', 'error')
      }
    },
    show () {
      var max1 = Object.keys(this.opciones).length
      var max2 = Object.keys(this.profesiones).length
      var i, numAlet1
      for (i = 0; i < max1; i++) {
        numAlet1 = this.randomSent(max1)
        this.dates1 = {
          text: this.opciones[numAlet1].text,
          value: this.opciones[numAlet1].value
        }
        this.options.push(this.dates1)
      }
      this.positions = []
      for (i = 0; i < max2; i++) {
        numAlet1 = this.randomSent(max2)
        this.dates2 = {
          text: this.profesiones[numAlet1].text,
          value: this.profesiones[numAlet1].value
        }
        this.professions.push(this.dates2)
      }
      this.positions = []
    },
    onEvaluate () {
      var count = 0
      var size = Object.keys(this.selected).length
      for (const i in this.selected) {
        if (this.selected[i].select === this.selected[i].answer) {
          this.selected[i].state = true
          count += 1
        }
      }
      if (count === size) {
        this.$swal('Well done!', '', 'success')
      } else {
        for (const i in this.selected) {
          this.selected[i].select = ''
          this.selected[i].state = null
        }
        this.$swal('Try again', '', 'error')
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
    #selExc10 {
        width: 120px;
    }
    #imgExe10 {
    width: 200px;
    height: 330px;
  }
</style>
