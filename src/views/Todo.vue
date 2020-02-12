<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <div>
            <span>{{"Active tasks: "+ tasks.length}}</span>
          </div>
            <task class="task" @task_done="delete_task(index)" :key="index" v-for="(data,index) in tasks" :data="data"></task>
          <div>
            <div>
              <v-text-field placeholder="New task..." type="text" v-model="new_task.title" />
              <v-textarea label="Description of task" auto-grow outlined row-height="15" v-model="new_task.desc" placeholder="Description"></v-textarea>
            </div>
            <v-btn @click="add_task" depressed large color="primary">ADD TASK</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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
</style>
