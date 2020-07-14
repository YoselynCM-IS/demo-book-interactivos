// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { BootstrapVue } from 'bootstrap-vue'

import Home from './components/Home'

import Exercise1 from './components/Exercise1'
import Exercise2 from './components/Exercise2'
import Exercise3 from './components/Exercise3'
import Exercise4 from './components/Exercise4'
import Exercise5 from './components/Exercise5'
import Exercise6 from './components/Exercise6'
import Exercise7 from './components/Exercise7'
import Exercise8 from './components/Exercise8'
import Exercise9 from './components/Exercise9'
import Exercise10 from './components/Exercise10'
import Exercise11 from './components/Exercise11'
import Exercise12 from './components/Exercise12'
import Exercise13 from './components/Exercise13'
import Exercise14 from './components/Exercise14'
import Exercise15 from './components/Exercise15'
import Exercise16 from './components/Exercise16'
import Exercise17 from './components/Exercise17'
import Exercise18 from './components/Exercise18'
import Exercise19 from './components/Exercise19'
import Exercise20 from './components/Exercise20'
import Page from './components/Page'
import Draw from './components/Draw'

import VueRouter from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2'

import { Drag, Drop } from 'vue-drag-drop'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPuzzlePiece, faEdit, faArrowAltCircleLeft, faMusic, faPlayCircle, faStopCircle, faHome, faPauseCircle, faMinus, faDownload, faCheckCircle, faMarker, faMousePointer, faEraser, faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import('./assets/css/style.css')
import('./assets/css/botones.css')
import('./assets/css/forms.css')
library.add(faPuzzlePiece, faEdit, faArrowAltCircleLeft, faMusic, faPlayCircle, faStopCircle, faHome, faPauseCircle, faMinus, faDownload, faCheckCircle, faMarker, faMousePointer, faEraser, faPalette)

window.$ = window.jQuery = require('jquery')

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(require('vue-moment'))
Vue.component('drag', Drag)
Vue.component('drop', Drop)
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/exercise1', name: 'exercise1', component: Exercise1 },
    { path: '/exercise2', name: 'exercise2', component: Exercise2 },
    { path: '/exercise3', name: 'exercise3', component: Exercise3 },
    { path: '/exercise4', name: 'exercise4', component: Exercise4 },
    { path: '/exercise5', name: 'exercise5', component: Exercise5 },
    { path: '/exercise6', name: 'exercise6', component: Exercise6 },
    { path: '/exercise7', name: 'exercise7', component: Exercise7 },
    { path: '/exercise8', name: 'exercise8', component: Exercise8 },
    { path: '/exercise9', name: 'exercise9', component: Exercise9 },
    { path: '/exercise10', name: 'exercise10', component: Exercise10 },
    { path: '/exercise11', name: 'exercise11', component: Exercise11 },
    { path: '/exercise12', name: 'exercise12', component: Exercise12 },
    { path: '/exercise13', name: 'exercise13', component: Exercise13 },
    { path: '/exercise14', name: 'exercise14', component: Exercise14 },
    { path: '/exercise15', name: 'exercise15', component: Exercise15 },
    { path: '/exercise16', name: 'exercise16', component: Exercise16 },
    { path: '/exercise17', name: 'exercise17', component: Exercise17 },
    { path: '/exercise18', name: 'exercise18', component: Exercise18 },
    { path: '/exercise19', name: 'exercise19', component: Exercise19 },
    { path: '/exercise20', name: 'exercise20', component: Exercise20 },
    { path: '/draw', name: 'draw', component: Draw },
    { path: '/page/:num', name: 'page', component: Page }
  ]
})

new Vue({
  el: '#app',
  router,
  components: {
    App,
    Home,
    Exercise1,
    Exercise2,
    Exercise3,
    Exercise4,
    Exercise5,
    Exercise6,
    Exercise7,
    Exercise8,
    Exercise9,
    Exercise10,
    Exercise11,
    Exercise12,
    Exercise13,
    Exercise14,
    Exercise15,
    Exercise16,
    Exercise17,
    Exercise18,
    Exercise19,
    Exercise20,
    Draw
  },
  template: '<App/>'
})
