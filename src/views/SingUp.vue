<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>REGISTRATION</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-alert :value="error" type="warning">{{ error }}</v-alert>
                <v-form v-model="valid">
                  <v-text-field v-model="email" label="E-Mail" name="login" prepend-icon="person" type="text" required :rules="erules"/>
                  <v-text-field v-model="password" id="password" label="Password" name="password" prepend-icon="lock" type="password" required :rules="prules"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click.prevent="signup" :disabled="processing || !valid">Sign UP</v-btn>
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
  data() {
    return {
      email: null,
      password: null,
      valid: false,
      erules: [
        (v) => !!v || "Please, enter email",
        (v) =>/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || "Wrong email"
      ],
      prules: [
        (v) => !!v || "Please, enter password",
        (v) => (v && v.length >= 6) || "password is too short - must be 6 symbol or more"
      ]
    }
  },
  computed: {
    error() {
      return this.$store.getters.get_error;
    },
    processing() {
      return this.$store.getters.get_processing;
    },
    is_user_authenticated() {
      return this.$store.getters.is_user_authenticated;
    }
  },
  watch: {
    is_user_authenticated(value) {
      if (value === true) this.$router.push({ path: "/todo" });
    }
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
</style>