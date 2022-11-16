<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import NavMobile from "../components/NavMobile.vue";

import { sidebarWidth, collapsed } from "../components/Sidebar/state";
import Card from "../components/Card.vue";
import Leftbar from "../components/Leftbar/Leftbar.vue";
export default {
  components: { Sidebar, NavMobile, Card, Leftbar },
  setup() {
    return { sidebarWidth };
  },
  data: () => {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 828;
    },
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);

  },
};
</script>
<template>
  <Sidebar v-if="!mobileView" />
  <Leftbar v-if="!mobileView" />
  <div class="_container" v-if="!collapsed">
    <RouterView class="content" />
  </div>
  <NavMobile v-if="mobileView" key="1" />
  <v-app v-if="mobileView" >
    <v-system-bar window>
      <v-icon icon="mdi-wifi-strength-4"></v-icon>
      <v-icon icon="mdi-signal" class="ml-2"></v-icon>
      <v-icon icon="mdi-battery" class="ml-2"></v-icon>
      <span class="ml-2">3:13PM</span>
    </v-system-bar>
  </v-app>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
:root {
  --sidebar-bg-color: #6ee0dd;
  --sidebar-item-hover: #4ec1ce;
  --sidebar-item-active: #3b9cad;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  
   margin-left: 80px;
   width: 100%;
   padding: 50px;
}

._container {
   margin-left: 215px; 
}

@media only screen and (max-width: 828px) {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    width: 800px;
    height: auto;
  }
}
</style>
