import Vue from 'vue'
import * as types from '../mutations'

const state = {
	welcomeImage: {
		text: '',
		img: ''
	}
}

const getters = {
	welcomeImage: state => state.welcomeImage
}

const mutations = {
	[types.GET_WELCOMEIMAGE](state, data) {
		state.welcomeImage = data
	}
}

const actions = {
	getWelcomeImage ({ commit }) {
		let u = "http://news-at.zhihu.com/api/4/start-image/1080*1776"
		u = "http://10.0.8.8/w.json"
		// u = "http://10.0.0.2:8888/questions"

		Vue.http.get(u).then((response) => {
			commit(types.GET_WELCOMEIMAGE, response.body)
		}, (err) => {
			console.log("error" + err.body)
		})

		// http.get(, (res) => {
		// 	let d = JSON.parse(res)
		// 	console.log("d" + d)
		// 	commit(types.GET_WELCOMEIMAGE, {d})
		// }).on("error", (e) => {
		// 	console.log(`Got error: ${e.message}`);
		// });
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}