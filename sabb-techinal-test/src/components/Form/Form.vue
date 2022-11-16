<template>
  <div class="container ml-5 py-4">
    <div>
      <h2 v-if="page === '/create'">Add User</h2>
      <h2 v-if="finWord(page) === 'update'">Update User</h2>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="firstName"
        :counter="10"
        :rules="nameRules"
        label="firstName"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :counter="10"
        :rules="nameRules"
        label="LastName"
        required
      ></v-text-field>
      <v-text-field
        v-if="page === '/create'"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="picture"
        :counter="10"
        label="Picture"
        required
      ></v-text-field>
      <v-text-field
        v-model="phone"
        :counter="10"
        label="Phone Number"
        required
      ></v-text-field>

      <v-select
        v-model="title"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Title"
        required
      ></v-select>
      <v-select
        v-model="gender"
        :items="genders"
        :rules="[(v) => !!v || 'Item is required']"
        label="Gender"
        required
      ></v-select>

      <!-- <v-btn  class="mr-4" type="submit"> Validate </v-btn> -->
      <div class="text-center ma-2">
        <v-btn
          color="success"
          type="submit"
          @click.prevent="submitCreate"
          v-if="page === '/create'"
        >
          Submit
        </v-btn>
        <v-btn
          color="success"
          type="submit"
          @click.prevent="submitUpdate"
          v-if="finWord(page) === 'update'"
        >
          Update
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { customStore } from "../../stores/users";

export default {
  props: ["page"],
  data: () => ({
    valid: true,
    snackbar: false,
    text: ``,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["ms", "mr", "mrs", "miss", "dr", ""],
    checkbox: false,
    genders: ["male", "female", "other", ""],
    userId: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    phone: "",
    gender: "",
  }),

  computed: {
    ...mapState(customStore, ['detailUser', 'successMessage']),
  },

  methods: {
    ...mapActions(customStore, ["createUser", "updateUser", 'fetchDetailUser']),
    validate() {
      this.$refs.form.validate();
    },

    async submitCreate() {
      try {
        await this.createUser({
          title: this.title,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          picture: this.picture,
          phone: this.phone,
          gender: this.gender,
        });
      } catch (console) {}
    },

    async submitUpdate() {
      try {
        await this.updateUser({
          userId: this.userId,
          title: this.title,
          firstName: this.firstName,
          lastName: this.lastName,
          picture: this.picture,
          phone: this.phone,
          gender: this.gender,
        })
         
      } catch (console) {}
    },

    finWord (str){
      return str.split('/').filter((s) => s === 'update').join('')
    }
  },

  async created() {
    if (this.finWord(this.page) === "update") {
      await this.fetchDetailUser(this.$route.params.userId)
      this.userId = this.detailUser.id
      this.title = this.detailUser.title
      this.firstName = this.detailUser.firstName
      this.lastName = this.detailUser.lastName
      this.picture = this.detailUser.picture
      this.phone = this.detailUser.phone
      this.gender = this.detailUser.gender
      this.text = this.successMessage
    }

  },
};
</script>
<style scoped>
.container {
  width: 700px;
}
</style>
