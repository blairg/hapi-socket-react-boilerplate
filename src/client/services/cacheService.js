import Axios from 'axios';

class CacheService {
  static async getTodos(callback) {
    try {
      const response = await Axios.get('/todos');

      callback(response.data, null);
    } catch (error) {
      callback(null, error.response.status);
    }
  }
}

export default CacheService;
