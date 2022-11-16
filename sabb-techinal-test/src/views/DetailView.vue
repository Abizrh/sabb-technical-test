<template>
  <DetailCard :user="detailUser" />
</template>
<script>
import { mapActions, mapState } from "pinia";
import { customStore } from "../stores/users";
import DetailCard from '../components/DetailCard.vue'

export default {
  data() {
    return {};
  },
  components: {
    DetailCard
  },
  computed: {
    ...mapState(customStore, ["detailUser"]),
  },

  methods: {
    ...mapActions(customStore, ["fetchDetailUser"]),
  },

  async created() {
    await this.fetchDetailUser(this.$route.params.userId)
  },
};
</script>
<style scoped>

</style>
