<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },

  created(){
    collapsed
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
      </span>
      <span class="_logo" v-if="!collapsed">
        <img src="../../assets/sabcare.webp" />
      </span>
    </h1>
    <SidebarLink to="/dashboard" icon="fas fa-home">Dashboard</SidebarLink>
    <SidebarLink to="/" icon="fas fa-th-list">List User</SidebarLink>
    <SidebarLink to="/create" icon="fas fa-plus-square">Add Users</SidebarLink>
    <!-- <SidebarLink to="/update" icon="fas fa-user-edit" >Update Users</SidebarLink> -->


    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #3c00bd;
  --sidebar-item-hover: #5a4bbb;
  --sidebar-item-active: #59509f;
}
</style>

<style scoped>
.sidebar {
  color: rgb(0, 0, 0);
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  border-radius: 20px;
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

._logo {
  margin-bottom: 10px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

._logo img {
  width: 70px;
}

</style>