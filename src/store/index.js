import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import * as modules from './modules'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
	getters,
	actions,
	modules,
	strict: true
})