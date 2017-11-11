import Axios from 'axios';

class CacheService {
  static getTodos(callback) {
    Axios.get('/todos')
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        /*eslint-disable */
              console.error(error);
              /* eslint-enable */
      });
  }
}

export default CacheService;
