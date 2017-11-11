import Controller from '../controllers/static';

module.exports = [
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
