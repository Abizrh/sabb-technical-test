<template>
  <div class="text-center mr-14 pagination">
    <v-pagination
      v-model="page"
      :length="total_pages"
      @click="onChangePage"
      total-visible="7"
    ></v-pagination>
  </div>
  <div class="btn">
    <v-btn @click="handleDownload" on-load="downloadLoading">
      <i class="fas fa-file-excel">Export Excel</i>
    </v-btn>
  </div>
  <div>
    <v-table :data="users" class="table ml-5 my-5" :pageSize="5">
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
</template>
<script>
import TableValue from "./TableValue/TableValue.vue";

import { mapActions, mapState } from "pinia";
import { customStore } from "../../stores/users";
export default {
  data() {
    return {
      page: 0,
      bookType: "xlsx",
      autoWidth: true,
      downloadLoading: false,
      title: "",
      columns: [
        {
          label: "Title",
          field: "title",
        },
        {
          label: "First Name",
          field: "firstName",
        },
        {
          label: "Last Name",
          field: "lastName",
        },
        {
          label: "Picture",
          field: "picture",
        },
      ],
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

    onChangePage() {
      this.fetchUsers(this.page++);
    },

    handleDownload() {
      this.downloadLoading = true;
      const mimeType = "data:application/vnd.ms-excel";
      const html = this.renderTable().replace(/ /g, "%20");
      const documentPrefix =
        this.title != "" ? this.title.replace(/ /g, "-") : "Sheet";
      const d = new Date();
      const dummy = document.createElement("a");
      dummy.href = mimeType + ", " + html;
      dummy.download =
        documentPrefix +
        "-" +
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        "-" +
        d.getHours() +
        "-" +
        d.getMinutes() +
        "-" +
        d.getSeconds() +
        ".xls";
      document.body.appendChild(dummy);
      dummy.click();
    },

    renderTable() {
      let table = "<table><thead>";
      table += "<tr>";
      for (let i = 0; i < this.columns.length; i++) {
        const column = this.columns[i];
        table += "<th>";
        table += column.label;
        table += "</th>";
      }
      table += "</tr>";
      table += "</thead><tbody>";
      for (let i = 0; i < this.users.length; i++) {
        const row = this.users[i];
        table += "<tr>";
        for (let j = 0; j < this.columns.length; j++) {
          const column = this.columns[j];
          table += "<td>";
          table += this.collect(row, column.field);
          table += "</td>";
        }
        table += "</tr>";
      }
      table += "</tbody></table>";
      return table;
    },

    collect(obj, field) {
      if (typeof field === "function") return field(obj);
      else if (typeof field === "string") return this.dig(obj, field);
      else return undefined;
    },
    dig(obj, selector) {
      let result = obj;
      const splitter = selector.split(".");
      for (let i = 0; i < splitter.length; i++) {
        if (result == undefined) return undefined;
        result = result[splitter[i]];
      }
      return result;
    },
  },

  created() {
    this.fetchUsers();
  },
};
</script>
<style scoped>
.btn {
  margin-left: 240px;
}
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
  margin-top: 30px;
  margin-bottom: 20px;
}
.table {
  width: 750px;
  height: 500px;
}

@media only screen and (max-width: 635px) {
  .table {
    width: 500px;
    height: 200px;
  }

  .pagination {
    width: 420px;
  }
}

@media only screen and (max-width: 412px) {
  .table {
    width: 400px;
    height: 750px;
    margin-right: 399px;
  }
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
