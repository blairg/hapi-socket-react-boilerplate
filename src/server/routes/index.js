import Controller from '../controllers/index';

module.exports = [
    {
        method: 'GET',
        path: '/index',
        config: Controller.index,
    },
];
