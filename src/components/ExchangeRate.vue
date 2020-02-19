<template>
  <div>
      <small v-for="(r,index) in rate" :key="index"> {{r.ccy}} buy: {{r.buy}} sale: {{r.sale}}</small>
  </div>
</template>

<script>

export default {
    created(){
      this.$store.dispatch('load_rate')
    },
    computed:{
      rate(){
        let arr=[]
        arr=this.$store.getters.rate_exchengr
        arr=arr.slice(0,2)
        return arr
      }
    }
}
</script>

<style>

</style>