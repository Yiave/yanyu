import Vue from 'vue'
import * as types from '../mutations'

const state = {
	questions: []
}

const getters = {
	questions: state => state.questions
}

const mutations = {
	[types.GET_QUESTIONS](state, data) {
		state.questions = data
	}
}

const actions = {
	getQuestions ({ commit }) {
		let u = "http://10.0.0.2:8888/questions"

		Vue.http.get(u).then((response) => {
			commit(types.GET_QUESTIONS, response.body)
		}, (err) => {
			console.log("error" + err.body)
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}