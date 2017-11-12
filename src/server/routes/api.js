import Controller from '../controllers/api';

export default [
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
