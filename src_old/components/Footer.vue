<template>
    <div>
        <v-footer :fixed="true" app>
            <span>{{ date }}</span>
        </v-footer>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                date: new Date ()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>