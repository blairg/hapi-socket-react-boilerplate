import Axios from 'axios';

class CacheService {
  static getTodos(callback) {
    Axios.get('/todos')
      .then((response) => {
        callback(response.data);
      })
      .catch(async (error) => {
        console.error(error);
      });
  }
}

export default CacheService;
