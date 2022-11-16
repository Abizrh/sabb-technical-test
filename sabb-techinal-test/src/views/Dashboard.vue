<template>
    <Table />
  </template>
  
  <script>
  import { collapsed, toggleSidebar } from '../components/Sidebar/state'
import Table from '../components/Table/Table.vue';
  export default {
    setup() {
        return { collapsed, toggleSidebar };
    },
    components: { Table }
}
  </script>