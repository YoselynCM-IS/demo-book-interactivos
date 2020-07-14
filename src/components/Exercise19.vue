<template>
    <div>
        <MyHeader :page="'page10'"></MyHeader>
        <div id="divContent" class="container">
            <div class="contenido-titulo">
                <h1 class="titulo-ejercicios">READING AND WRITING
                  <br>Descriptions</h1>
            </div>
            <p class="instrucciones">
                <b class="numero-vineta">1.</b> Read Jessie’s e-mail. Which is her bed?
            </p>
            <b-row>
                <b-col sm="8">
                    <p>
                        Hi, Thomas! I love my new house! My sister and I have a big bedroom. Everything is pink and purple! There is big <b><u>window</u></b> and there’s a small <b><u>closet</u></b> next to my sister’s bed. We have clothes and shoes in it. There is a long <b><u>rug</u></b> between the <b><u>beds</u></b>. There is a <b><u>night table</u></b>, with a drawer and a lamp on it. And under the drawer I have my photo album. There is a <b><u>mirror</u></b> on the wall. There isn’t a TV in my room. There are big flowers on the wall, above my bed. There are <b><u>cushions</u></b> on the beds and on the floor. There aren’t books in my room, because I don’t have a <b><u>bookshelf</u></b>. There are beds under the beds! Look at the photo.
                        <br>
                        <b>Jessie</b>
                    </p>
                </b-col>
                <b-col sm="4">
                    <img id="imgExe19" src="@/assets/imgs/exercise19/gral.svg" alt="">
                </b-col>
            </b-row>
            <hr>
            <p class="instrucciones">
                <b class="numero-vineta">2. </b>Read the description of the room. Look at the underlined words and write them under the corresponding pictures. Now listen and circle the stressed syllable. Which one is it?
            </p>
            <div class="multimedia">
                <audio controls>
                    <source src="../assets/audios/exercise19.mp3">
                </audio>
            </div>
            <hr>
            <b-row>
                <b-col v-for="(option, i) in options" v-bind:key="i">
                    <img class="img-e19" :src="require(`@/assets/imgs/exercise19/${option.word}.svg`)" alt=""><br>
                    <input type="text" :pattern="option.word">
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise19 from '@/assets/json/exercise19.json'
export default {
  name: 'Exercise19',
  components: {'MyHeader': Header},
  data () {
    return {
      opciones: exercise19,
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
      var max1 = Object.keys(this.opciones).length
      for (var i = 0; i < max1; i++) {
        var numAlet = this.randomSent(max1)
        this.dates = {
          word: this.opciones[numAlet].word
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
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
    #imgExe19 {
        width: 400px;
        height: 270px;
    }
    .img-e19{
        margin-top: 1rem;
        width: 200px;
        height: 141px;
    }
</style>
