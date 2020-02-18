<template>
  <v-card class="overflow-hidden">
    <v-navigation-drawer v-model="drawer" :fixed="true" app temporary class="hidden-md-and-up">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>ToDo LIST</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="(item, index) in nav_items" :key="`drawer_item${index}`" link :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

<v-list-item @click.prevent="sign_out" v-if="is_user_authenticated">
          <v-list-item-icon>
            <v-icon v-html="'input'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
      </v-list>
    </v-navigation-drawer>
    <v-app-bar absolute color="#fcb69f" dark shrink-on-scroll src="https://picsum.photos/1920/1080?random" scroll-target="#scrolling-techniques-2">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>
      <v-app-bar-nav-icon @click.stop="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>ToDo LIST</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text large v-for="(item, index) in nav_items" :key="`nav_item${index}`" :to="item.route" class="hidden-sm-and-down">
        <v-icon v-html="item.icon"></v-icon>{{ item.title }}
      </v-btn>
      <v-btn @click.prevent="sign_out" v-if="is_user_authenticated" text large class="hidden-sm-and-down">
        <v-icon v-html="'input'"></v-icon>Sign out
      </v-btn>
    </v-app-bar>
      <v-sheet id="scrolling-techniques-2"  max-height="128">
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    is_user_authenticated() {
      return this.$store.getters.is_user_authenticated;
    },
    nav_items() {
      return this.is_user_authenticated
        ? [
            {
              icon: "post_add",
              title: "My notifications",
              route: "/todo"
            },
            {
              icon: "contact_support",
              title: "Support",
              route: "/support"
            }
          ]
        : [
            {
              icon: "input",
              title: "Sign in",
              route: "/singin"
            },
            {
              icon: "lock_open",
              title: "Sign up",
              route: "/registration"
            },
            {
              icon: "contact_support",
              title: "Support",
              route: "/support"
            }
          ];
    }
  },
  methods: {
    sign_out() {
      this.$confirm('Do you really want to sign out?').then(res =>
      {
        if (res === true)
          {
            this.$store.dispatch('signout')
          }
      })
    }
  },
  watch: {
    is_user_authenticated(value) {
      if (value === false) this.$router.push({ path: "/" })
    }
  },
}
</script>

<style lang="scss" scoped></style>
