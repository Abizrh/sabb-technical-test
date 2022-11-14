<template>
  <div class="home">
   <Card />
   
  </div>
</template>

<script>
// @ is an alias to /src

import Card from "../components/Card.vue";

// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  inject: {
      theme: {
        default: { isDark: false },
      },
    },
  name: "Home",
  components: {
    Card,
  },
};
</script>
