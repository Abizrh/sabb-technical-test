<template>
 <Sidebar />
  <router-view />
</template>
<script>
import Sidebar from '../components/Sidebar/Sidebar.vue';

export default {
    components: {
    Sidebar
 }
}
</script>
 