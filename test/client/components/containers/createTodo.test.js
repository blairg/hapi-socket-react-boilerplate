/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import assert from 'assert';
import sinon from 'sinon';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import CreateTodo from './../../../../src/client/components/containers/createTodo.jsx';

const sandbox = sinon.sandbox.create();
let mockAxios;

describe('client/components/containers/createTodo -> <CreateTodo />', () => {
  const event = { preventDefault: () => {} };

  beforeEach(() => {
    mockAxios = new MockAdapter(Axios);
    sandbox.stub(event, 'preventDefault');
    sandbox.stub(console, 'error');
  });

  afterEach(() => {
    mockAxios.reset();
    sandbox.restore();
  });

  describe('CreateTodo.handleDelete(event)', () => {
    it('should call Axios.delete and event.preventDefault()', async () => {
      mockAxios.onDelete('/todos').reply(200);
      const success = await CreateTodo.handleDelete(event);

      assert.equal(event.preventDefault.called, true);
      assert.equal(success, true);
    });

    it('should call Axios.delete and throw error', async () => {
      mockAxios.onDelete('/todos').networkError();
      const success = await CreateTodo.handleDelete(event);

      assert.equal(event.preventDefault.called, true);
      assert.equal(success, false);
    });
  });
});
