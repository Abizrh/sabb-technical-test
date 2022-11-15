<template>
  <!-- <div class="table">
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
  </div> -->
  <div>
    <v-table :data="users" class="table ml-5" :pageSize="5">
      <thead slot="head">
        <th>No</th>
        <th>Title</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Picture</th>
        <th>Actions</th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }">
        <TableValue
          v-for="(user, idx) in users"
          :key="idx"
          :user="user"
          :idx="idx"
        />
      </tbody>
    </v-table>
  </div>
  <div class="text-center mr-14 pagination">
    <v-pagination
      v-model="page"
      :length="total_pages"
      @click="onChangePage"
      total-visible="7"
    ></v-pagination>
    <!-- <nav aria-label="Page navigation example">
        <ul class="pagination-ul">
          <li class="page-item" v-for="(page, idx) in pageNumber(total_pages)" :key="idx">
            <a @click="onChangePage(page - 1)" >
                {{page}}
            </a>
          </li>
        </ul>
      </nav> -->
  </div>
</template>
<script>
import TableValue from "./TableValue/TableValue.vue";
import { mapActions, mapState } from "pinia";
import { customStore } from "../../stores/users";
export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    TableValue,
  },

  computed: {
    ...mapState(customStore, ["users", "current_page", "total_pages"]),
  },

  methods: {
    ...mapActions(customStore, ["fetchUsers"]),

    pageNumber(user) {
      let users = [];

      for (let i = 0; i < user; i++) {
        users.push(i);
      }

      return users;
    },

    onChangePage() {
        this.fetchUsers(this.page++)
    },
  },

  created() {
    this.fetchUsers();

    console.log(this.users, "USSSERRRR");
  },
};
</script>
<style scoped>
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
.pagination {
  margin-top: 500px;
}
.table {
  width: 750px;
  height: 500px;
}
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
