<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12">
          <div>
            <p><strong>{{data.title}}</strong></p>
            <p v-if="data.desc!=''">{{data.desc}}</p>
          </div>
          <v-btn depressed large color="primary" @click="task_done()">DONE</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    task_done() {
      this.$emit("task_done");
    }
  }
};
</script>
<style lang="scss">
</style>
