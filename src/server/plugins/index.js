import Nes from 'nes';
import Inert from 'inert';
import Vision from 'vision';
import HapiSwagger from 'hapi-swagger';

import Package from './../../../package';

const options = {
    info: {
        'title': 'Todo Example Application Documentation',
        'version': Package.version,
    }
};

const Swagger = {
    'register': HapiSwagger,
    'options': options
};

export default [
    {plugin: Nes }, 
    {plugin: Inert }, 
    // {plugin: Vision }, 
    // {plugin: Swagger }
];