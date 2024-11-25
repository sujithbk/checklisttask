const axios = require('axios');

class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getApplicationById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/applications/getApplicationById/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch application data: ${error.message}`);
    }
  }
}

module.exports = ApiService;