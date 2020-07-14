<template>
    <div>
        <MyHeader :page="'page5'"></MyHeader>
        <div id="divContent" class="container">
            <div class="contenido-titulo">
                <h1 class="titulo-ejercicios">READING<br>Trips</h1>
            </div>
            <p class="instrucciones">
                <b class="numero-vineta">1.  </b> Read and answer.
            </p>
            <div class="text-left preguntas">
                <form class="form-inline">
                    <p>What do US and Canada citizens can use instead of a passport?</p>
                    <textarea id="inpExe14" class="imput-multimedia"></textarea>
                </form>
            </div>
            <hr>
            <h4>Visiting Mexico?</h4>
            <p>
                US and Canadian tourists can enter Mexico without a passport if they have an official photo ID, such
                as a driver’s license, plus some proof of their citizenship, such as an original birth certificate. But to
                return to or transit the US by air, a passport or other secure travel document such as a Nexus card is
                required. To return to or transit the US by land or sea, Americans and Canadians must present either a
                passport, or other documents proving identity and citizenship (official photo ID and birth certificate),
                or the recently introduced US passport card, or a Nexus or other ‘trusted traveler’ card. Canadians
                flying back from Mexico to Canada are advised to carry a passport.
                In any case, it’s much better to travel to Mexico with a passport because officials of all countries are
                used to passports and may delay people who have other documents. In Mexico you often need your
                passport to change money and to check into hotels.
                All citizens of countries other than the US and Canada need to have a passport that’s valid for at least
                six months after they arrive in Mexico.
                Travelers under 18 who are not accompanied by both their parents may need special documentation.
            </p>
            <p>Adapted from: <a href="http://www.lonelyplanet.com/mexico/transport/getting-there-away" target="_blank">http://www.lonelyplanet.com/mexico/transport/getting-there-away</a></p>
            <hr>
            <div class="preguntas">
                <form class="form-inline">
                <ol>
                    <li v-for="(question, i) in questions" v-bind:key="i">
                        {{ question.question }}
                        <textarea id="inpExe14" v-model="question.answer" ></textarea>
                    </li>
                </ol>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise14 from '@/assets/json/exercise14.json'
export default {
  name: 'Exercise14',
  components: {'MyHeader': Header},
  data () {
    return {
      positions: [],
      preguntas: exercise14,
      questions: [],
      dates: {}
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show () {
      var max = Object.keys(this.preguntas).length
      for (var i = 0; i < max; i++) {
        var numAlet = this.randomSent(max)
        this.dates = {
          question: this.preguntas[numAlet].question,
          answer: this.preguntas[numAlet].answer
        }
        this.questions.push(this.dates)
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
