export default {
  state: {
    tasks: [
      {
        title: "Some title",
        desc: "Some description"
      },
      {
        title: "Some title",
        desc: "Some description"
      }
    ],
    new_task: {
      title: "",
      desc: ""
    }
  },
  mutations: {
    SET_TASKS(state, load) {
      state.tasks = load;
    }
  },
  getters: {
    getTasks: state => state.tasks,
    getnew_Tasks: state => state.new_task
  }
};
