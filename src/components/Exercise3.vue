<template>
  <div>
    <MyHeader :page="'page8'"></MyHeader>
    <div id="divContent" class="container">
      <!-- <div class="contenido-titulo">
        <h1 class="titulo-ejercicios">Aqui va el titulo</h1>
      </div> -->
      <p class="instrucciones">
        <b class="numero-vineta">2. </b>Complete the conversation with the Verb <i>to Be</i> or the corresponding pronoun.
      </p>
      <div class="parrafo">
        <b-row>
          <b-col sm="9" align="left">
            <table class="tabla-e9">
              <tbody align="left">
                <tr>
                  <td valign="top" class="personaje-input"><b>Carlos:</b></td>
                  <td valign="top" class="dialogo-input">Hello Pedro. How <input type="text" pattern="(a|A)re"/> you?</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Pedro:</b></td>
                  <td valign="top" class="dialogo-input">I’m fine thanks. <input type="text" pattern="(t|T)his"/> is my friend Karla.</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Carlos:</b></td>
                  <td valign="top" class="dialogo-input">Hello Karla. <input type="text" pattern="(a|A)re"/> you in group 202?</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Karla:</b></td>
                  <td valign="top" class="dialogo-input">No, <input type="text" pattern="(I|i)'m"/> not. I’m in group 220</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Carlos:</b></td>
                  <td valign="top" class="dialogo-input">Oops! What’ <input type="text" pattern="s"/> that sound?</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Pedro:</b></td>
                  <td valign="top" class="dialogo-input"><input type="text" pattern="(i|I)t's"/> the school bell.</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Karla:</b></td>
                  <td valign="top" class="dialogo-input">Is <input type="text" pattern="(i|I)t"/> time to go to class now?</td>
                </tr>
                <tr>
                  <td valign="top" class="personaje-input"><b>Pedro:</b></td>
                  <td valign="top" class="dialogo-input">Yes, it <input type="text" pattern="(i|I)s"/> Let’s run!</td>
                </tr>
              </tbody>
            </table>
          </b-col>
          <b-col>
            <img id="imgExe3" src="@/assets/imgs/exercise3/conversation.jpg" alt="">
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Exercise1',
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
  #imgExe3 {
    width: 100%;
    height: 150px;
  }
</style>
