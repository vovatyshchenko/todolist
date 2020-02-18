<template>
    <div>
        <v-footer :fixed="true" app>
            <exchange-rate class="font-italic ml-auto"></exchange-rate>
        </v-footer>
    </div>
</template>

<script>
import ExchangeRate from "@/components/ExchangeRate.vue";

    export default {
        components: {
            ExchangeRate
        }
    }
</script>

<style lang="scss" scoped>

</style>