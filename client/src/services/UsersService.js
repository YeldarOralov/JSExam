import api from '@/services/api.js';

export default {
  fetchUsers () {
    return api().get('users')
  },
  addUser (params) {
    return api().post('users', params)
  },
  getUser (params) {
    return api().get(`users/${params.id}`)
  },
  updateUser (params) {
    return api().put(`users/${params.id}`, params)
  },
  deleteUser (id) {
    return api().delete(`users/${id}`)
  }
}