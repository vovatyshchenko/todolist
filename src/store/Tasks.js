import Vue from "vue"

export default {
  state: {
    tasks: []
  },
  mutations: {
    set_tasks(state, payload) {
      state.tasks = payload;
    }
  },
  actions: {
    load_tasks ({commit}) {
      Vue.$db.collection('tasks').orderBy('created_at','desc').get().then(querySnapshot => {
        let tasks = []
        querySnapshot.forEach(s => {
          const data = s.data()
          let task = {
            id: s.id,
            title: data.title,
            desc: data.desc,
            created_at: data.created_at
          }
          tasks.push(task)
        })
        commit('set_tasks', tasks)
      }).catch(error => {error})
    }
  },
  getters: {
    get_tasks: state => state.tasks
  }
};
