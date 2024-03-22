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

  async getProductById(producId) {
    try {
      const response = await axios.get(`${BASE_URL}/products/${producId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${producId}:`, error);
      throw error;
    }
  },

  async getAllTopping() {
    try {
      const response = await axios.get(`${BASE_URL}/topping`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  async getAllSize() {
    try {
      const response = await axios.get(`${BASE_URL}/size`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
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
  },

  async getUser() {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      const users = response.data;
      return users;
    } catch (error) {
      console.error('Lỗi khi lấy thông tin người dùng:', error);
      throw error;
    }
  },

  async addUser(user) {
    try {
      const response = await axios.post(`${BASE_URL}/users`, user);
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  },
  async updateUser(userID, data) {
    try {
      const response = await axios.put(`${BASE_URL}/users/${userID}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${userID}:`, error);
      throw error;
    }
  },
  
  
};
