/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import assert from 'assert';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CreateTodo from './../../../../src/client/components/containers/createTodo.jsx';

const sandbox = sinon.sandbox.create();
let mockAxios;

Enzyme.configure({ adapter: new Adapter() });

describe('client/components/containers/createTodo -> <CreateTodo />', () => {
  beforeEach(() => {
    mockAxios = new MockAdapter(Axios);
  });

  afterEach(() => {
    mockAxios.reset();
    sandbox.restore();
  });

  it('should call Axios.delete and event.preventDefault()', () => {
    const event = { preventDefault: () => {} };

    sandbox.stub(event, 'preventDefault');
    mockAxios.onDelete('/todos').reply(200);

    CreateTodo.handleDelete(event);

    assert.equal(event.preventDefault.called, true);
  });

  it('should call Axios.delete and throw error', () => {
    const event = { preventDefault: () => {} };

    sinon.stub(console, 'error');
    sandbox.stub(event, 'preventDefault');
    mockAxios.onDelete('/todos').networkError();

    CreateTodo.handleDelete(event);

    assert.equal(event.preventDefault.called, true);
  });
});
