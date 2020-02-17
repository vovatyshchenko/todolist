<template>
  <div>
      <span v-for="(r,index) in rate" :key="index"> {{r.ccy}} buy: {{r.buy}} sale: {{r.sale}}</span>
  </div>
</template>

<script>
export default {
    created(){
      this.$store.dispatch('load_rate')
    },
    computed:{
      rate(){
        return this.$store.getters.rate_exchengr
      }
    }
}
</script>

<style>

</style>