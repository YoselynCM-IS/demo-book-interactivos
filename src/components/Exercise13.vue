<template>
    <div>
      <MyHeader :page="'page3'"></MyHeader>
      <div id="divContent" class="container">
        <div class="contenido-titulo">
          <h1 class="titulo-ejercicios">LISTENING AND WRITING<br>Clock and Days of the Week</h1>
        </div>
        <p class="instrucciones">
          <b class="numero-vineta">1. </b>
          <font-awesome-icon id="iconPlay" icon="play-circle"/> 
          Read and listen to what Mr. Green does on weekdays and complete his schedule. Compare with a partner. Read the script to check your answers.
        </p>
        <audio controls>
          <source src="../assets/audios/exercise13.mp3">
        </audio>
        <hr>
        <table class="tabla-e9">
            <tbody class="tabla13" align="left">
              <tr v-for="(sentence, i) in sentences" v-bind:key="i">
                <td valign="top" class="personaje"><b>{{ sentence.person }}:</b></td>
                <td class="dialogo">{{ sentence.sentence }}</td>
              </tr>
            </tbody>
        </table>
        <hr>
        <b-row>
            <b-col class="preguntas" v-for="(answer, i) in answers" v-bind:key="i">
                {{ answer.day }}
                <textarea v-model="answer.answer"></textarea>
            </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise131 from '@/assets/json/exercise13-1.json'
import exercise132 from '@/assets/json/exercise13-2.json'
export default {
  name: 'Exercise13',
  components: {'MyHeader': Header},
  data () {
    return {
      sentences: exercise131,
      answers: exercise132
    }
  }
}
</script>
<style scoped>
  #imgExe13 {
    width: 100%;
    height: 150px;
  }
</style>
