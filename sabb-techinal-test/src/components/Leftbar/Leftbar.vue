<script>
// import SidebarLink from './SidebarLink.vue'
// import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: {},
};
</script>

<template>
  <div class="sidebar">
    <h1>
      <span> </span>
      <span>Vue</span>
    </h1>
    <v-item-group mandatory>
        <v-container class="mr-9 ml-1">
          <v-row>
            <v-col
              v-for="n in 2"
              :key="n"
              cols="12"
              md="6"
            >
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? 'primary' : ''"
                  class="d-flex align-center pl-4 left-item"
                  
                  height="200"
                  @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="text-h2 flex-grow-1 text-center"
                    >
                      Active
                    </div>
                  </v-scroll-y-transition>
                  <h3>Hellooo</h3>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    <!-- <span class="collapse-icon">
      <i class="fas fa-angle-double-left" />
    </span> -->
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #6ee0dd;
  --sidebar-item-hover: #4ec1ce;
  --sidebar-item-active: #3b9cad;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color)                                                                                                                                                                                                                                                                                                                     ;
  float: right;
  position: fixed;
  width: 300px;
  border-radius: 20px;
  height: auto;
  top: 0;
  left: 1000px;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.left-item {
    background-color: rgb(68, 184, 176);
}
</style>
