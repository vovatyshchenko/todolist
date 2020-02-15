<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12">
          <div>
            <p class="text-uppercase font-weight-black" :class="{important:checked}">{{data.title}}</p>
            <p class="font-italic font-weight-medium" v-if="data.desc!=''">{{data.desc}}</p>
          </div>
          <div class="btn__groupe">
            <v-btn class="btn" depressed large color="primary" @click="task_done()">DONE</v-btn>
            <v-switch v-model="checked" label="important!" color="red" hide-details></v-switch>
          </div>
          <hr>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      checked: false
    };
  },
  methods: {
    task_done() {
      this.$confirm('It is done?').then(res => {
        if (res === true) {this.$emit("task_done")}
      })
    }
  }
};
</script>
<style scoped lang="scss">
.btn__groupe {
  display: flex;
}
.btn {
  margin-right: 15px;
}
.important {
  color: #ff0000;
}
</style>
