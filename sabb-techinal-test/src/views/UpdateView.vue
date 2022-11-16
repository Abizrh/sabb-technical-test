<template>
  <Form :page="page" />
</template>
<script>
import Form from "../components/Form/Form.vue";

export default {
  components: {
    Form,
  },

  data() {
    return {
      page: "",
    };
  },

  created(){
    let path =  this.$router.currentRoute.value
    this.page = path.name
  }
};
</script>
