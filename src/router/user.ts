import type { UserInfoResult } from '@/api/user/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ id: '', username: '', email: '', avatar: '' }),
  getters: {},
  actions: {
    async updateUserInfo(userInfo: UserInfoResult) {
      this.id = userInfo.id
      this.username = userInfo.username
      this.email = userInfo.email
      this.avatar = userInfo.avatar
    }
  }
})
