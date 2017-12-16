/* eslint-disable no-undef */

import assert from 'assert';
import sinon from 'sinon';
import nes from 'nes';
import inert from 'inert';
import vision from 'vision';
import plugins from './../../../src/server/plugins/index';

const sandbox = sinon.sandbox.create();

describe('server/plugins/index', () => {
  beforeEach(() => {});

  afterEach(() => {
    sandbox.restore();
  });

  it('should return 4 plugins', () => {
    assert.equal(plugins.length, 4);
  });

  it('should return nes plugin at index 0', () => {
    assert.equal(plugins[0], nes);
  });

  it('should return nes inert at index 1', () => {
    assert.equal(plugins[1], inert);
  });

  it('should return nes vision at index 2', () => {
    assert.equal(plugins[2], vision);
  });
});
