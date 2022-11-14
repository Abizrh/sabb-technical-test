<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import NavMobile from "../components/NavMobile.vue";

import { sidebarWidth } from "../components/Sidebar/state";
import Card from "../components/Card.vue";
export default {
  components: { Sidebar, NavMobile, Card },
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
  <div class="container">
    <RouterView class="content" />
  </div>
  <NavMobile v-if="mobileView" key="1" />
  <!-- <v-app-bar elevation="4">tesssss</v-app-bar> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  margin-left: 200px;
}

@media only screen and (max-width: 828px) {
  .container {
    margin-left: 10px;
  }
}
</style>
