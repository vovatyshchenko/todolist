<template>
  <div>
    <div class="task">
      <h3 class="task__title">{{data.title}}</h3>
      <p v-if="data.desc!=''">{{data.desc}}</p>
    </div>
    <button class="task__btn" @click="task_done()">done</button>
  </div>
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
.task {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.task__btn {
  margin: 0 auto;
  padding: 5px 25px;
  border-radius: 5px;
  text-transform: uppercase;
}
.task__btn:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: 0.2s opacity linear;
}
</style>
