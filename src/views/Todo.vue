<template>
  <div id="app">
    <div>
      <h3>{{"Active tasks: "+ tasks.length}}</h3>
      <hr />
    </div>
    <task
      class="task"
      @task_done="delete_task(index)"
      :key="index"
      v-for="(data,index) in tasks"
      :data="data"
    ></task>
    <div>
      <div class="new__task">
        <input placeholder="New task..." type="text" v-model="new_task.title" />
        <textarea placeholder="Description" type="text" v-model="new_task.desc"></textarea>
      </div>
      <button class="task__btn" @click="add_task">add</button>
    </div>
  </div>
</template>
<script>
import task from "@/components/Task.vue";

export default {
  components: {
    task: task
  },
  data() {
    return {
      new_task: {
        title: "",
        desc: ""
      },
      tasks: [
        {
          title: "Some title",
          desc: "Some description"
        },
        {
          title: "Some title",
          desc: "Some description"
        }
      ]
    };
  },
  methods: {
    add_task() {
      if (this.new_task.title !== "") {
        this.tasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc
        });
        this.new_task.title = "";
        this.new_task.desc = "";
      }
    },
    delete_task(id) {
      this.tasks.splice(id, 1);
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  max-width: 33%;
  margin: 0 auto;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
}
hr {
  opacity: 0.5;
}
.new__task {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 10px auto;
}
input {
  margin-bottom: 5px;
}
textarea {
  resize: none;
}
input,
textarea {
  padding: 5px;
  border-radius: 3px;
}
</style>
