import assert from 'assert';
import { fn as momentProto } from 'moment';
import sinon from 'sinon';
import calculateTimeDifference from './../../../src/shared/helpers/timeHelper';

const sandbox = sinon.sandbox.create();

describe('formatTime', () => {

  beforeEach(() => {
    sandbox.stub(momentProto, 'unix');
  })

  afterEach(() => {
    sandbox.restore();
  })

  it('should return "1 second ago" when the date passed in is the same as the current time', () => {
    const blogDate = 100;
    momentProto.unix.returns(100);

    assert.equal(calculateTimeDifference(blogDate), '1 second ago');
  });

  it('should return "5 seconds ago" when the date is 5 seconds in the past', () => {
    const blogDate = 100;
    momentProto.unix.returns(105);

    assert.equal(calculateTimeDifference(blogDate), '5 seconds ago');
  });

  it('should return "1 minute ago" when the date is 1 minute in the past', () => {
    const blogDate = 100;
    momentProto.unix.returns(160);

    assert.equal(calculateTimeDifference(blogDate), '1 minute ago');
  });

  it('should return "10 minutes ago" when the date is 10 minutes in the past', () => {
    const blogDate = 100;
    momentProto.unix.returns(671);

    assert.equal(calculateTimeDifference(blogDate), '10 minutes ago');
  });

  it('should return "1 hour ago" when the date is 1 hour in the past', () => {
    const blogDate = 100;
    momentProto.unix.returns(3700);

    assert.equal(calculateTimeDifference(blogDate), '1 hour ago');
  });

  it('should return "3 hours ago" when the date is 3 hours in the past', () => {
    const blogDate = 100;
    momentProto.unix.returns(10180);

    assert.equal(calculateTimeDifference(blogDate), '3 hours ago');
  });

  it('should return "1 day ago" when the date is 1 day in the past', () => {
    const blogDate = 100;
    momentProto.unix.returns(86500);

    assert.equal(calculateTimeDifference(blogDate), '1 day ago');
  });

  it('should return "6 days ago" when the date is 6 days in the past', () => {
    const blogDate = 100;
    momentProto.unix.returns(518500);

    assert.equal(calculateTimeDifference(blogDate), '6 days ago');
  });
});