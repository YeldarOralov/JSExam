import api from '@/services/api.js';

export default {
  fetchProducts () {
    return api().get('products')
  },
  addProduct (params) {
    return api().post('products', params)
  },
  getProduct (params) {
    return api().get(`products/${params.id}`)
  },
  updateProduct (params) {
    return api().put(`products/${params.id}`, params)
  },
  deleteProduct (id) {
    return api().delete(`products/${id}`)
  }
}