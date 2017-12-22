/* eslint-disable no-undef */

import assert from 'assert';
import { fn as momentProto } from 'moment';
import sinon from 'sinon';
import calculateTimeDifference from './../../../src/shared/helpers/timeHelper';

const sandbox = sinon.sandbox.create();

describe('shared/helpers/formatTime', () => {
  beforeEach(() => {
    sandbox.stub(momentProto, 'unix');
  });

  afterEach(() => {
    sandbox.restore();
  });

  test('should return "1 second ago" when the date passed in is the same as the current time', () => {
    const todoDate = 100;
    momentProto.unix.returns(100);

    assert.equal(calculateTimeDifference(todoDate), '1 second ago');
  });

  test('should return "5 seconds ago" when the date is 5 seconds in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(105);

    assert.equal(calculateTimeDifference(todoDate), '5 seconds ago');
  });

  test('should return "1 minute ago" when the date is 1 minute in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(160);

    assert.equal(calculateTimeDifference(todoDate), '1 minute ago');
  });

  test('should return "10 minutes ago" when the date is 10 minutes in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(671);

    assert.equal(calculateTimeDifference(todoDate), '10 minutes ago');
  });

  test('should return "1 hour ago" when the date is 1 hour in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(3700);

    assert.equal(calculateTimeDifference(todoDate), '1 hour ago');
  });

  test('should return "3 hours ago" when the date is 3 hours in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(10180);

    assert.equal(calculateTimeDifference(todoDate), '3 hours ago');
  });

  test('should return "1 day ago" when the date is 1 day in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(86500);

    assert.equal(calculateTimeDifference(todoDate), '1 day ago');
  });

  test('should return "6 days ago" when the date is 6 days in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(518500);

    assert.equal(calculateTimeDifference(todoDate), '6 days ago');
  });

  test('should return "1 week ago" when the date is 7 days in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(604900);

    assert.equal(calculateTimeDifference(todoDate), '1 week ago');
  });

  test('should return "1 month ago" when the date is 28 days in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(2419300);

    assert.equal(calculateTimeDifference(todoDate), '1 month ago');
  });

  test('should return "1 year ago" when the date is 1 year in the past', () => {
    const todoDate = 100;
    momentProto.unix.returns(29030500);

    assert.equal(calculateTimeDifference(todoDate), '1 year ago');
  });
});
