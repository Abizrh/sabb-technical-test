<template>
  <div class="home">
    <!-- <Card /> -->
    <section>
      <Card />
    </section>
    <section class="list-table">
      <Table />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import Card from "../components/Card.vue";
import Content from "../components/Content.vue";
import Table from "../components/Table/Table.vue";
import TableValue from "../components/Table/TableValue/TableValue.vue";
import { mapActions, mapState } from "pinia";
import { customStore } from "../stores/users";
export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  name: "Home",
  components: {
    Card,
    Content,
    Table,
    TableValue,
  },
  computed: {
    ...mapState(customStore, ['listPost'])
  },

  methods: {
    ...mapActions(customStore, ['fetchListPost'])
  },

  created(){
    this.fetchListPost()
  }
};
</script>
<style></style>
