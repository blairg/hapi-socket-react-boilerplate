import Controller from '../controllers/public';

export default [
  {
    method: 'GET',
    path: '/css/{param*}',
    config: Controller.css,
  },
  {
    method: 'GET',
    path: '/js/{param*}',
    config: Controller.js,
  },
];
