import Moment from 'moment';
import HttpStatus from 'http-status';
import CacheServiceImport from './../services/cacheService';

const cacheService = CacheServiceImport();
const socketPrefix = 'todos';

const badRequestResponse = reply => reply({ 'bad request': 'false' }).code(HttpStatus.BAD_REQUEST);

// TODO: Convert to a class
module.exports = {
  get: {
    handler: (request, reply) => {
      return reply(cacheService.get()).code(HttpStatus.OK);
    },
  },
  add: {
    handler: (request, reply) => {
      const payload = request.payload;

      if (!payload) {
        return badRequestResponse(reply);
      } 

      let todos = cacheService.get();

      if (!todos) {
        todos = [];
      }

      todos.unshift({
        timestamp: Moment().unix(),
        ...payload,
      });

      cacheService.set(todos);
      request.server.publish(`/${socketPrefix}`, todos);

      return reply({ created: 'OK' }).code(HttpStatus.CREATED);
    },
  },
  delete: {
    handler: (request, reply) => {
      cacheService.set([]);
      request.server.publish(`/${socketPrefix}`, []);

      return reply({ deleted: 'OK' }).code(HttpStatus.RESET_CONTENT);
    },
  },
};
