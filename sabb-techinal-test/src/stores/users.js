import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const customStore = defineStore({
  id: 'user',
  state: () => ({
    baseUrl: 'https://dummyapi.io/data/v1',
    app_id: '63722e73cafa0886cfc0d902',
    users: [],
    current_page: 0,
    total_pages: 0
  }),

  actions: {
    async fetchUsers(page = 0) {
      try {

        const { data } = await axios({
          method: 'get',
          url: `${this.baseUrl}/user?page=${page}`,
          headers: {
            "app-id": this.app_id
          }
        })

        console.log(data, 'DAAAATAAA')
        this.users = data.data
        this.current_page = data.page
        this.total_pages = data.total
        
      } catch (error) {

        console.log(error, 'ERRORRO')
        
      }
    }
  }
})