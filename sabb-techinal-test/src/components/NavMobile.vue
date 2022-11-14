<template>
  <v-app>
    <v-bottom-navigation :value="value" color="teal" grow>
      <v-btn>
        <span>Recents</span>
        <SidebarLink to="/" icon="fas fa-home" mobile />
      </v-btn>
      <v-btn>
        <span>Favorites</span>
        <SidebarLink to="/dashboard" icon="fas fa-columns" mobile  />
      </v-btn>
      <v-btn>
        <span>Favorites</span>
        <SidebarLink to="/analytics" icon="fas fa-chart-bar" mobile  />
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<script>
import SidebarLink from "./Sidebar/SidebarLink.vue";

export default {
  data: () => ({ value: 1 }),
  components: {
    SidebarLink,
  },
};
</script>
