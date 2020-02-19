<template>
    <div>
        <v-footer :fixed="true" app class="footer">
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
.footer {
    opacity: .7
}
</style>