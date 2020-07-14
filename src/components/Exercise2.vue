<template>
  <div>
    <MyHeader :page="'page6'"></MyHeader>
    <div id="divContent" class="container">
      <div class="contenido-titulo">
        <h1 class="titulo-ejercicios">WRITING<br>Trips</h1>
      </div>
      <div class="row">
        <div class="col-md-6 text-left">
          <button class="btn descarga-pdf" @click="download">Download exercise</button>
        </div>
      </div>
      <p class="instrucciones">
        <b class="numero-vineta">1. </b>Look at the pictures. Write the occupation and where the people work. Then, write what they do in their jobs.
      </p>
      <hr>
      <div id="tableExercise">
        <b-table responsive :items="options" :fields="fields">
          <template v-slot:cell(image)="data">
            <img class="img-e2" :src="require(`@/assets/imgs/exercise2/${data.item.image}.svg`)" alt=""/>
          </template>
          <template v-slot:cell(place)="data">
            <textarea v-model="data.item.place"></textarea>
          </template>
          <template v-slot:cell(activities)="data">
            <textarea v-model="data.item.activities"></textarea>
          </template>
        </b-table>
      </div>
      <!-- MODALS -->
      <b-modal ref="my-modal" centered hide-footer title="">
        <b-row>
          <b-col>
            <b-form-input v-model="nameStudent" :state="state" placeholder="Enter your name"></b-form-input>
          </b-col>
          <b-col>
            <b-button variant="primary" @click="generatePDF">Continuar</b-button>
          </b-col>
        </b-row>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import exercise2 from '@/assets/json/exercise2.json'
var doc = new jsPDF()
var img = new Image()
export default {
  name: 'Exercise46One',
  components: {'MyHeader': Header},
  data () {
    return {
      fields: [
        {key: 'image', label: ''},
        {key: 'place', label: 'Work place'},
        {key: 'activities', label: 'Job activities'}
      ],
      opciones: exercise2,
      options: [],
      positions: [],
      nameStudent: '',
      state: null
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
          image: this.opciones[numAlet].image,
          place: this.opciones[numAlet].place,
          activities: this.opciones[numAlet].activities
        }
        this.options.push(this.dates)
      }
      this.positions = []
    },
    goHome () {
      this.$router.push({name: 'home'})
    },
    download () {
      this.$refs['my-modal'].show()
      html2canvas(document.querySelector('#tableExercise')).then(function (canvas) {
        img.src = canvas.toDataURL('image/svg', 2)
        img.width = 190
        img.height = 140
        doc.addImage(img.src, 'SVG', 10, 20, img.width, img.height)
      })
    },
    generatePDF () {
      this.$refs['my-modal'].hide()
      // Default export is a4 paper, portrait, using milimeters for units
      doc.setFontSize(18)
      doc.setFont('helvetica')
      doc.setFontType('bold')
      doc.text(10, 10, 'Lesson 46 - Exercise 1')
      doc.setFontSize(10)
      doc.text(10, 15, 'Student name: ' + this.nameStudent)
      doc.save('exercise.pdf')
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
  iframe{
    width: 100%;
    height: 400px;
  }
  .img-e2
  {
    width: 200px;
    height: 150px;

  }
</style>
