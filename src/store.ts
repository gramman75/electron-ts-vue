import Vue from 'vue';
import Vuex, { Store, mapState } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cnt:  0,
    todos : [
      {id: 1, text: 'java'},
      {id: 2, text: 'python'}
    ]

  },
  mutations: {
    increment(state, payload){
      debugger
      // console.log('state cnt : ' + state.cnt)
      state.cnt = state.cnt + payload.count
    }

  },
  actions: {
    increment(context){
      setTimeout(() => {
        context.commit('increment', {count : 2})
        console.log(context.state.cnt)
      }, 5000);
    },
    getData() {
      return new Promise((resolve, reject) =>{
        setTimeout(() => {
          resolve(100)
        }, 5000);
      })
    },
    async actionA( {commit, dispatch}) {
      let payload = { count : await dispatch('getData')}
      commit('increment', payload)
    },
    async actionB(context) {
      await context.dispatch('actionA')
      console.log('actionB Count : ' + context.state.cnt)
    }

  },
  getters: {
    getCount: state => 'store getter count : ' + state.cnt,
    getList: (state) => (id: number) => {
      return state.todos.find( todo => todo.id == id)
    }
  } 
});
