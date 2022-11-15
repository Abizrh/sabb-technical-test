<template>
  <div class="table">
    <v-row align="center" class="list px-3 mx-auto">
      
      <table class="styled-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Picture</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableValue
            v-for="(user, idx) in users"
            :key="idx"
            :user="user"
            :idx="idx"
          />
        </tbody>
      </table>
    </v-row>
  </div>
</template>
<script>
import TableValue from "./TableValue/TableValue.vue";
import { mapActions, mapState } from "pinia";
import { customStore } from "../../stores/users";
export default {
  data() {
    return {
        
    };
  },
  components: {
    TableValue,
  },

  computed: {
    ...mapState(customStore, ['users'])
  },

  methods: {
    ...mapActions(customStore, ['fetchUsers'])
  },

  created(){
    this.fetchUsers()
    console.log(this.users, 'USSSERRRR')
  }
};
</script>
<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
