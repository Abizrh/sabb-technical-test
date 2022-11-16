import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import Swal from 'sweetalert2';

export const customStore = defineStore({
  id: "user",
  state: () => ({
    baseUrl: "https://dummyapi.io/data/v1",
    app_id: "63722e73cafa0886cfc0d902",
    isPages: false,
    users: [],
    current_page: 0,
    total_pages: 0,
    listPost: [],
    detailUser: {},
    successMessage: '',
    editUser: {
      userId: "",
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      picture: "",
      phone: "",
      gender: "",
    },
  }),

  actions: {
    async fetchUsers(page = 0) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/user?page=${page}`,
          headers: {
            "app-id": this.app_id,
          },
        });

        this.users = data.data;
        this.current_page = data.page;
        this.total_pages = data.total;
      } catch (error) {
        console.log(error, "ERRORRO");
      }
    },

    async fetchListPost() {
      try {
        const { data: posts } = await axios({
          method: "get",
          url: this.baseUrl + "/post",
          headers: {
            "app-id": this.app_id,
          },
        });

        console.log(posts, "POST");

        this.listPost = posts.data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchDetailUser(id) {
      try {
        const { data: detail } = await axios({
          method: "get",
          url: this.baseUrl + "/user/" + id,
          headers: {
            "app-id": this.app_id,
          },
        });

        this.detailUser = detail;

      } catch (error) {
        console.log(error);
      }
    },

    async createUser(user) {
      console.log(user);
      try {
        await axios({
          method: "post",
          url: this.baseUrl + "/user/create",
          headers: {
            "app-id": this.app_id,
          },
          data: {
            title: user.title,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            picture: user.picture,
            dateOfBirth: user.dateOfBirth,
            location: user.location,
          },
        });
        Swal.fire({
          icon: 'success',
          title: 'Success Create User'
        })
        router.push({ name: "home" })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    },

    async updateUser(user) {
      try {
        await axios({
          method: "put",
          url: this.baseUrl + "/user/" + user.userId,
          headers: {
            "app-id": this.app_id,
          },
          data: {
            title: user.title,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            picture: user.picture,
            dateOfBirth: user.dateOfBirth,
            location: user.location,
          },
        });

        Swal.fire({
          icon: 'success',
          title: 'Success Update User'
        })
        router.push({ name: "home" })

        
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    },

    async deleteUser(id){
      try {

        await axios({
          method: 'delete',
          url: this.baseUrl + '/user/' + id,
          headers: {
            'app-id': this.app_id
          }
        })        
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    }
  },
});
