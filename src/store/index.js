import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 11,
  name: 'xu'
}

const mutations = {
  INCREMENT(states, count) {
    states.count += count
  },
  DECREMENT(states) {
    states.count -= 1
  }
}

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT', -3)
    }, 200)
  }
}

const getters = {
  fullName() {
    return `${state.count} ge ${state.name} tao`
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
