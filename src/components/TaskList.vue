<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="my-3" justify="center" :elevation="hover ? 16 : 5">
      <v-container>
        <v-row>
            <v-col cols="12" sm="12">
                <div>
                  <edit-dialog></edit-dialog>
                  <v-card-title class="text-uppercase font-weight-black" :class="{important:checked}">{{data.title}}</v-card-title>
                  <v-card-text class="font-italic font-weight-medium" v-if="data.desc!=''">{{data.desc}}</v-card-text>
                </div>
              </v-col>
              <v-col cols="12" sm="12">
                <div class="d-flex">
                  <v-btn class="mr-4" depressed large color="primary" @click="task_done()">DONE</v-btn>
                  <v-switch v-model="checked" label="important!" color="red" hide-details></v-switch>
                  <span class="font-italic font-weight-medium ml-auto">{{data.created_at}}</span>
                </div>
              </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>

<script>
import EditDialog from "@/components/EditDialog.vue"

export default {
  components: {
    EditDialog
  },
  props: ["data"],
  data() {
    return {
      checked: false
    }
  },
  methods: {
    task_done() {
      this.$confirm('It is done?').then(res => {
        if (res === true) 
          {
            this.$emit("task_done")
          }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.important {
  color: #ff0000;
}
</style>
