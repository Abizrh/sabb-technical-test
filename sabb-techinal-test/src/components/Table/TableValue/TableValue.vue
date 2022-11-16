<template>
  <tr>
    <td>{{ idx + 1 }}</td>
    <td>{{ user.title }}</td>
    <td>{{ user.firstName }}</td>
    <td>{{ user.lastName }}</td>
    <td>
      <v-avatar>
        <img :src="user.picture" alt="user.title" />
      </v-avatar>
    </td>
    <td>
      <v-btn
        depressed
        color="success"
        class="mx-3"
        @click="onDetailUser(user.id)"
      >
        <i class="fas fa-info-circle"></i>
      </v-btn>
      <v-btn
        depressed
        color="success"
        class="mx-3"
        @click="onUpdateUser(user.id)"
      >
        <i class="fas fa-user-edit"></i>
      </v-btn>
      <v-btn
        depressed
        color="error"
        class="mx-3"
        @click="onDeleteUser(user.id)"
      >
        <i class="fas fa-user-edit"></i>
      </v-btn>
    </td>
  </tr>
</template>
<script>
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import { customStore } from '../../../stores/users';

export default {
  data() {
    return {};
  },
  props: ["user", "idx"],
  methods: {
    ...mapActions(customStore, ['deleteUser', 'fetchUsers']),
    onDetailUser(userId) {
      this.$router.push({ name: "detail", params: { userId } });
    },

    onUpdateUser(userId) {
      this.$router.push({ name: "update", params: { userId } });
    },
   onDeleteUser(userId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
           await this.deleteUser(userId)
            .then(() => {
              this.fetchUsers()
              Swal.fire("Deleted!", "Your file has been deleted.", "success")
            })
          
        }
      });
    },
  },
};
</script>
<style scoped>
.btn {
  background: var(--sidebar-item-hover);
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
