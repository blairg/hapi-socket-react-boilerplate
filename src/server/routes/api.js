import Controller from '../controllers/api';

module.exports = [
  {
    method: 'GET',
    path: '/todos',
    config: Controller.get,
  },
  {
    method: 'POST',
    path: '/todos',
    config: Controller.add,
  },
  {
    method: 'DELETE',
    path: '/todos',
    config: Controller.delete,
  },
];
