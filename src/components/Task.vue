<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12">
          <div>
            <p :class="{important:checked}"><strong>{{data.title}}</strong></p>
            
            <p v-if="data.desc!=''">{{data.desc}}</p>
          </div>
          <div class="btn__groupe">
            <v-btn class="btn" depressed large color="primary" @click="task_done()">DONE</v-btn>
            <v-switch v-model="checked" label="important!" color="red" hide-details></v-switch>
          </div>
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
      this.$emit("task_done");
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
