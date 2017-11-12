/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */

import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Index from './../../../../src/client/components/presentation/index.jsx';

const sandbox = sinon.sandbox.create();

Enzyme.configure({ adapter: new Adapter() });

describe('client/components/presentation/index -> <Index todos={todos} />', () => {
  beforeEach(() => {
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return 4 plugins', () => {
    const wrapper = mount(<Index />);
  });
});
