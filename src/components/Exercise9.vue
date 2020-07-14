<template>
    <div>
      <MyHeader :page="'page1'"></MyHeader>
      <div id="divContent" class="container">
        <div class="contenido-titulo">
          <h1 class="titulo-ejercicios">LISTENING<br>Basic Vocabulary and Verb <i>to Be</i></h1>
        </div>
        <p class="instrucciones">
            <b class="numero-vineta">1. </b>
            <font-awesome-icon id="iconPlay" icon="play-circle"/> 
            Look at the picture. Listen. Where are they?
            <input id="inpExe9" pattern="(I|i)n the classroom"/>
        </p>
        <div class="multimedia">
          <audio controls>
            <source src="../assets/audios/exercise9.mp3">
          </audio>
        </div>
        <div class="row">
          <div class="col-md-9">
            <table class="tabla-e9">
              <tbody align="left" >
                <tr>
                  <td valign="top" class="personaje-input"><b>John:</b></td>
                  <td valign="top" class="dialogo-input">Look! <input pattern="He's|He is"/> our teacher.</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje"><b>Sue:</b></td>
                  <td class="dialogo">He is very cute!</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Teacher:</b></td>
                  <td class="dialogo-input">Good morning, class. <input pattern="I'm|I am">your English teacher. Please, call me Paul.</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>John:</b></td>
                  <td class="dialogo-input">Oh, <input pattern="he's|he is"> friendly!</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Sue:</b></td>
                  <td class="dialogo-input"><input pattern="We're|We are"> friendly, too.</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Teacher:</b></td>
                  <td class="dialogo-input">Excuse me young lady, <input pattern="what's|what is">your name?</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje"><b>Sue:</b></td>
                  <td class="dialogo">Er... my name is Sue, Paul.</td>
                </tr>
                <tr>
                  <td  valign="top" class="personaje"><b>Teacher:</b></td>
                  <td class="dialogo">OK, Sue. Silence, please.</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje"><b>Sue:</b></td>
                  <td class="dialogo">Ops! He is not friendly.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-3">
            <!-- IMAGEN -->
            <img id="imgExe9" src="@/assets/imgs/exercise9/teacher.svg" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Exercise9',
  components: {'MyHeader': Header}
}
</script>

<style scoped>
  input:invalid {
    border: 2px solid red;
  }
  input:valid {
    color: #00BC00;
  }
  #imgExe9 {
    width: 250px;
    height: 300px;
  }
</style>
