<template>
  <v-app>
    <v-bottom-navigation :value="value" color="teal" grow>
      <v-btn>
        <span>Home</span>
        <SidebarLink to="/" icon="fas fa-home" mobile />
      </v-btn>
      <v-btn>
        
        <span>Dashboard</span>
        <SidebarLink to="/dashboard" icon="fas fa-columns" mobile  />
      </v-btn>
      <v-btn>
        <span>Create</span>
        <SidebarLink to="/create" icon="fas fa-plus-square" mobile  />
        
      </v-btn>
      <!-- <v-btn>
        <span>Update</span>
        <SidebarLink to="/update" icon="fas fa-user-edit"  mobile  />
      </v-btn> -->
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
