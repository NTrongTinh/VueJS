import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Thay đổi URL nếu cần

export default {
  async getAllProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  async getProduct() {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching produts:', error);
      throw error;
    }
  },

  async getProductById(producId) {
    try {
      const response = await axios.get(`${BASE_URL}/products/${producId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${producId}:`, error);
      throw error;
    }
  },

  async addProduct(product) {
    try {
      const response = await axios.post(`${BASE_URL}/products`, product);
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  },

  async updateProduct(producId, updatedProductData) {
    try {
      const response = await axios.put(`${BASE_URL}/products/${producId}`, updatedProductData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${producId}:`, error);
      throw error;
    }
  },

  async deleteProduct(producId) {
    try {
      const response = await axios.delete(`${BASE_URL}/products/${producId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${producId}:`, error);
      throw error;
    }
  }
};
