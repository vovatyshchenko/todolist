<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ToDo LIST</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text large v-for="(item, index) in nav_items" :key="index" :to="item.route">{{ item.title  }}
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="150"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  computed: {
    nav_items() {
      return [
        {
          icon: "visibility",
          title: "My notifications",
          route: "/todo"
        },
        {
          icon: "exit_to_app",
          title: "Sing out",
          route: "/singout"
        },
        {
          icon: "input",
          title: "Sing in",
          route: "/singin"
        },
        {
          icon: "lock_open",
          title: "Singup",
          route: "/registration"
        },
        {
          icon: "support",
          title: "Support",
          route: "/support"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped></style>
