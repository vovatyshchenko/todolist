<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-layout>
            <v-flex>
              <v-text-field label="Search" v-model="search"></v-text-field>
            </v-flex>
          </v-layout>
          <div>
            <span>{{"Active tasks: "+ tasks.length}}</span>
          </div>
            <task-list class="task" @task_done="delete_task(index)" :key="index" v-for="(data,index) in tasks" :data="data"></task-list>
          <div>
            <div>
              <v-text-field label="New task..." type="text" v-model="new_task.title" />
              <v-textarea label="Description of task" auto-grow outlined row-height="15" v-model="new_task.desc"></v-textarea>
            </div>
            <v-btn @click="add_task" depressed large color="primary">ADD TASK</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import TaskList from "@/components/TaskList.vue";

export default {
  components: {
    TaskList
  },
  data() {
    return {
      search: null
    };
  },
  computed: {
    tasks () {
      return this.$store.getters.getTasks
    },
    new_task () {
      return this.$store.getters.getnew_Tasks
    },
    filteredtasks () {
      let tasks = this.tasks
      if (this.filteredtasks)
        tasks = tasks.filter(t=>t.title.toLowerCase().indexOf(this.filteredtasks.toLowerCase()) >=0 || t.desc.toLowerCase().indexOf(this.filteredtasks.toLowerCase()) >=0)
        return tasks   
    }   
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
