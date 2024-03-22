import databaseService from "@/databaseService";
import router from '@/router';

export default {
    async login({ commit }, { username, password }) {
        try {
          const response = await databaseService.getUser()
          const user = response.find(user => user.username === username && user.password === password);
          if (user) {
            commit('setLoggedInUser', user)
            router.push('/')
            alert("Đăng nhập thành công")
          } else {
            // router.push('/login')
            alert("Đăng nhập thất bại")
          }
          router.push('/')
        } catch (error) {
          console.error('Lỗi khi đăng nhập:', error)
          alert("Đăng nhập thất bại")
        //   return false // Đăng nhập thất bại
            router.push('/login')
        }
      },
      logout({ commit }) {
        commit('clearLoggedInUser')
        router.push('/')
      },
}