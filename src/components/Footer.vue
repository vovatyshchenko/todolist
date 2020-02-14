<template>
    <div>
        <v-footer :fixed="true" app>
            <span>{{ date }}</span>
            <exchange-rate></exchange-rate>
        </v-footer>
    </div>
</template>

<script>
import ExchangeRate from "@/components/ExchangeRate.vue";

    export default {
        components: {
            ExchangeRate
        },
        data () {
            return {
                date: new Date ()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>