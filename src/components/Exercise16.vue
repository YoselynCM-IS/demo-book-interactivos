<template>
    <div>
        <MyHeader :page="'page7'"></MyHeader>
        <div id="divContent" class="container">
            <div class="contenido-titulo">
                <h1 class="titulo-ejercicios">LISTENING AND READING
                    <br>These / this / that / those</h1>
            </div>
            <p class="instrucciones">
                <b class="numero-vineta">1.</b> 
                <font-awesome-icon id="iconPlay" icon="play-circle"/> 
                Look at the words. Use your dictionary to find out the meanings. What do you know about safaris? Listen and complete the conversation using these words.
            </p>
            <audio controls>
            <source src="../assets/audios/exercise16.mp3">
            </audio>
            <b-card>
                <b-row>
                    <b-col v-for="(option, i) in options" v-bind:key="i">{{ option.option }}</b-col>
                </b-row>
            </b-card>
            <b-row>
                <b-col sm="9" align="left">
                    <table>
                        <tbody>
                            <tr>
                                <td id="tdPerson"><b>Guide:</b></td>
                                <td>Look, over there!</td>
                            </tr>
                            <tr>
                                <td><b>Tourist 1:</b></td>
                                <td>Where? What is that? It’s so far.</td>
                            </tr>
                            <tr>
                                <td><b>Guide:</b></td>
                                <td>That’s a <input type="text" pattern="lioness">!</td>
                            </tr>
                            <tr>
                                <td><b>Tourist 2:</b></td>
                                <td>And are those her <input type="text" pattern="cubs">?</td>
                            </tr>
                            <tr>
                                <td><b>Tourist 1:</b></td>
                                <td>Of course, they’re not my cubs!</td>
                            </tr>
                            <tr>
                                <td><b>Guide:</b></td>
                                <td>Shh! Don’t make noise. Those animals are dangerous.</td>
                            </tr>
                            <tr>
                                <td><b>Tourist 2:</b></td>
                                <td>What’s this? Take it off me!</td>
                            </tr>
                            <tr>
                                <td><b>Tourist 1:</b></td>
                                <td>This is just a <input type="text" pattern="caterpillar">! Keep quiet!</td>
                            </tr>
                            <tr>
                                <td><b>Tourist 2:</b></td>
                                <td>OK. Guide, what are those things on your feet?</td>
                            </tr>
                            <tr>
                                <td><b>Guide:</b></td>
                                <td>Oh, dear! These are African <input type="text" pattern="bees">! Run!</td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
                <b-col sm="3"><img id="imgExe16" src="@/assets/imgs/exercise16/animals.svg" alt=""></b-col>
            </b-row>
            <hr>
            <p>
                Which animals are near the people? <input type="text" id="inpExe16" pattern="(C|c)aterpillar and bees">
            </p>
            <p>
                Which animals are far? <input type="text" id="inpExe16" pattern="(L|l)ioness and cubs">
            </p>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise16 from '@/assets/json/exercise16.json'
export default {
  name: 'Exercise16',
  components: {'MyHeader': Header},
  data () {
    return {
      opciones: exercise16,
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
          option: this.opciones[numAlet].option
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
    #inpExe16 {
        width: 300px;
    }
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
    #imgExe16 {
        margin-top: 1rem;
        width: 300px;
        height: 261px;
    }
    #tdPerson {
        width: 23%;
    }
</style>
