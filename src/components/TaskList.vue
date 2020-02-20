<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="my-3" justify="center" :elevation="hover ? 16 : 5">
      <v-container>
        <v-row>
            <v-col cols="12" sm="12">
                <div>
                  <v-row class="ml-3">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on" v-html="'edit'"></v-icon>
                      </template>
                      <v-form v-model="task_valid">
                        <v-card>
                          <v-card-title>
                            <span class="headline">EDIT TASK</span>
                          </v-card-title>
                          <v-card-text>
                            <v-text-field label="Edit task..." type="text" :rules="task_rules" :value="data.title" v-model="edit_title"/>
                            <v-textarea label="Edit description of task" auto-grow outlined row-height="15" :value="data.desc" v-model="edit_desc"></v-textarea>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click.prevent="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click.prevent="edit_task(data.id)" :disabled="!task_valid">Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </v-dialog>
                  </v-row>
                  <v-card-title class="text-uppercase font-weight-black" :class="{important:checked}">{{data.title}}</v-card-title>
                  <v-card-text class="font-italic font-weight-medium" v-if="data.desc!=''">{{data.desc}}</v-card-text>
                </div>
              </v-col>
              <v-col cols="12" sm="12">
                <div class="d-flex">
                  <v-btn class="mr-4" depressed large color="primary" @click="task_done()">DONE</v-btn>
                  <v-switch v-model="checked" label="important!" color="red" hide-details></v-switch>
                  <small class="mt-auto ml-auto">{{data.created_at}}</small>
                </div>
                <div class="d-flex">
                  <small class="mt-auto ml-auto" v-if="data.updated_at!=''">{{data.updated_at}}</small>
                </div>
              </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>

<script>
import Vue from "vue"

export default {
  props: ["data"],
  data() {
    return {
      checked: false,
      dialog: false,
      task_valid: false,
      task_rules: [ (v) => (v.length >= 1) ],
      edit_title: this.data.title,
      edit_desc: this.data.desc
    }
  },
  methods: {
    task_done() {
      this.$confirm('It is done?').then(res => {
        if (res === true) {
          this.$emit("task_done")
        }
      })
    },
    edit_task(index){
      const date = 'updated ' + new Date().toLocaleString()
        Vue.$db.collection('tasks').doc(index).set({
          title: this.edit_title,
          desc: this.edit_desc,
          created_at: this.data.created_at,
          updated_at: date
        })
      this.$store.dispatch('load_tasks')
      this.dialog = false
    }
  }
}
</script>

<style scoped lang="scss">
.important {
  color: #ff0000;
}
</style>
