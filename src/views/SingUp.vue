<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>REGISTRATION</v-toolbar-title>
                <v-spacer />
 
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email"
                    label="E-Mail"
                    name="login"
                    prepend-icon="person"
                    type="text" required
                  />

                  <v-text-field v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password" required
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click.prevent="signup">Sign UP</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    signup () {
      this.$store.dispatch('signup',{email:this.email, password:this.password})
    }
  }

}
</script>

<style>

</style>