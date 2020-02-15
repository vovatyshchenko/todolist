import Vue from "vue"

export default {
  state: {
    tasks: [],
    new_task: {
      title: "",
      desc: ""
    }
  },
  mutations: {
    set_tasks(state, load) {
      state.tasks = load;
    }
  },
  actions: {
    load_tasks ({commit}) {
      Vue.$db.collection('tasks').get().then(querySnapshot => {
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
      }).catch(error => console.log(error))
    }
  },
  getters: {
    getTasks: state => state.tasks,
    getnew_Tasks: state => state.new_task
  }
};
