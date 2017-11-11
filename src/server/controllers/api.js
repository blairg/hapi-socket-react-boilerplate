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
            return reply.response(cacheService.get()).code(HttpStatus.OK);
        },
        description: 'Get todos',
        notes: 'Gets the todos',
        tags: ['api'],
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

            return reply.response({ created: 'OK' }).code(HttpStatus.CREATED);
        },
        description: 'Add todo',
        notes: 'Adds a todo',
        tags: ['api'],
    },
    delete: {
        handler: (request, reply) => {
            cacheService.set([]);
            request.server.publish(`/${socketPrefix}`, []);

            return reply.response({ deleted: 'OK' }).code(HttpStatus.RESET_CONTENT);
        },
        description: 'Delete todos',
        notes: 'Deletes all todos',
        tags: ['api'],
    },
};
