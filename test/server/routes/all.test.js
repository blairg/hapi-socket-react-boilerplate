/* eslint-disable no-undef */

import assert from 'assert';
import sinon from 'sinon';
import allRoutes from './../../../src/server/routes/all';
import apiRoute from './../../../src/server/routes/api';
import indexRoute from './../../../src/server/routes/index';
import publicRoute from './../../../src/server/routes/public';

const sandbox = sinon.sandbox.create();

describe('server/routes/all', () => {
  beforeEach(() => {});

  afterEach(() => {
    sandbox.restore();
  });

  it('should return Api route', () => {
    assert.equal(allRoutes.Api, apiRoute);
  });

  it('should return Index route', () => {
    assert.equal(allRoutes.Index, indexRoute);
  });

  it('should return Public route', () => {
    assert.equal(allRoutes.Public, publicRoute);
  });
});
