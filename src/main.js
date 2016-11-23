import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'assets/vue-material.css'

import router from './router'
import store from './store'
import App from './components/App'

Vue.use(VueMaterial)

Vue.material.theme.registerAll({
	default: {
		primary: 'blue',
		accent: 'pink'
	},
	indigo: {
		primary: 'indigo',
		accent: 'pink'
	}
})

var vm = new Vue({
	el: '#app',
	router,
	store,
	...App
})