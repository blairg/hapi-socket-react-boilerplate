/* eslint-disable no-undef */

import allRoutes from './../../../src/server/routes/all';
import apiRoute from './../../../src/server/routes/api';
import indexRoute from './../../../src/server/routes/index';
import publicRoute from './../../../src/server/routes/public';

describe('server/routes/all', () => {
  test('should return Api route', () => {
    expect(allRoutes.Api).toEqual(apiRoute);
  });

  test('should return Index route', () => {
    expect(allRoutes.Index).toEqual(indexRoute);
  });

  test('should return Public route', () => {
    expect(allRoutes.Public).toEqual(publicRoute);
  });
});
