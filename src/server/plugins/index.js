import Nes from 'nes';
import Inert from 'inert';
import Vision from 'vision';
import HapiSwagger from 'hapi-swagger';

import Package from './../../../package.json';

const options = {
  info: {
    title: 'Todo Example Application Documentation',
    version: Package.version,
  },
};

const Swagger = {
  register: HapiSwagger,
  options,
};

export default [Nes, Inert, Vision, Swagger];
