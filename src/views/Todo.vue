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
          <div>
            <v-form v-model="task_valid">
              <v-text-field label="New task..." type="text" v-model="new_task_title" :rules="task_rules"/>
              <v-textarea label="Description of task" auto-grow outlined row-height="15" v-model="new_task_desc"></v-textarea>
            </v-form>
            <v-btn @click="add_task" depressed large color="primary" :disabled="!task_valid">ADD TASK</v-btn>
          </div>
          <task-list class="task" @task_done="delete_task(index)" v-for="(data,index) in tasks"  :key="index" :data="data"></task-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Vue from "vue"
import TaskList from "@/components/TaskList.vue"

export default {
  components: {
    TaskList
  },
  beforeUpdate() {
    this.$store.dispatch('load_tasks')
  },
  data() {
    return {
      new_task_title: '',
      new_task_desc: '',
      search: null,
      task_valid: false,
      task_rules: [
        (v) => (v.length >= 1) 
      ]
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.get_tasks
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
      if (this.new_task_title !== "") {
        const date = new Date().toLocaleString()
        Vue.$db.collection('tasks').doc().set({
          title: this.new_task_title,
          desc: this.new_task_desc,
          created_at: date
        }).then(function() {}).catch()
      this.new_task_title = ""
      this.new_task_desc = ""
      }
    },
    delete_task(index) {
      Vue.$db.collection("tasks").doc(this.$store.getters.get_tasks[index].id).delete()
      .then(function() {})
      .catch(function() {})
     }
  }
};
</script>

<style scoped lang="scss">
</style>
