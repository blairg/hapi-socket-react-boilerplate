/* eslint-disable no-undef */

import nes from 'nes';
import inert from 'inert';
import vision from 'vision';
import plugins from './../../../src/server/plugins/index';

describe('server/plugins/index', () => {
  test('should return 4 plugins', () => {
    expect(plugins.length).toEqual(4);
  });

  test('should return nes plugin at index 0', () => {
    expect(plugins[0]).toEqual(nes);
  });

  test('should return nes inert at index 1', () => {
    expect(plugins[1]).toEqual(inert);
  });

  test('should return nes vision at index 2', () => {
    expect(plugins[2]).toEqual(vision);
  });
});
