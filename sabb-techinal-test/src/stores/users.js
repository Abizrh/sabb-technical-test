import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const customStore = defineStore({
  id: 'user',
  state: () => ({
    baseUrl: 'https://dummyapi.io/data/v1/',
    app_id: '63722e73cafa0886cfc0d902',
    users: []
  }),

  actions: {
    async fetchUsers() {
      try {

        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + 'user',
          headers: {
            "app-id": this.app_id
          }
        })

        console.log(data, 'DAAAATAAA')
        this.users = data.data
        
      } catch (error) {

        console.log(error, 'ERRORRO')
        
      }
    }
  }
})