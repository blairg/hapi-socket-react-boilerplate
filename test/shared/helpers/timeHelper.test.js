/* eslint-disable no-undef */

import { fn as momentProto } from 'moment';
import calculateTimeDifference from './../../../src/shared/helpers/timeHelper';

describe('shared/helpers/formatTime', () => {
  test('should return "1 second ago" when the date passed in is the same as the current time', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 100);

    expect(calculateTimeDifference(todoDate)).toEqual('1 second ago');
  });

  test('should return "5 seconds ago" when the date is 5 seconds in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 105);

    expect(calculateTimeDifference(todoDate)).toEqual('5 seconds ago');
  });

  test('should return "1 minute ago" when the date is 1 minute in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 160);

    expect(calculateTimeDifference(todoDate)).toEqual('1 minute ago');
  });

  test('should return "10 minutes ago" when the date is 10 minutes in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 671);

    expect(calculateTimeDifference(todoDate)).toEqual('10 minutes ago');
  });

  test('should return "1 hour ago" when the date is 1 hour in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 3700);

    expect(calculateTimeDifference(todoDate)).toEqual('1 hour ago');
  });

  test('should return "3 hours ago" when the date is 3 hours in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 10180);

    expect(calculateTimeDifference(todoDate)).toEqual('3 hours ago');
  });

  test('should return "1 day ago" when the date is 1 day in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 86500);

    expect(calculateTimeDifference(todoDate)).toEqual('1 day ago');
  });

  test('should return "6 days ago" when the date is 6 days in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 518500);

    expect(calculateTimeDifference(todoDate)).toEqual('6 days ago');
  });

  test('should return "1 week ago" when the date is 7 days in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 604900);

    expect(calculateTimeDifference(todoDate)).toEqual('1 week ago');
  });

  test('should return "1 month ago" when the date is 28 days in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 2419300);

    expect(calculateTimeDifference(todoDate)).toEqual('1 month ago');
  });

  test('should return "1 year ago" when the date is 1 year in the past', () => {
    const todoDate = 100;
    momentProto.unix = jest.fn(() => 29030500);

    expect(calculateTimeDifference(todoDate)).toEqual('1 year ago');
  });
});
