import Moment from 'moment';

const timeRangeMessage = (value, label) => `${Math.round(value)} ${label}${(value === 1) ? '' : 's'} ago`;

const calculateSeconds = (timeDifference) => {
  const seconds = (timeDifference < 1) ? 1 : timeDifference;

  return timeRangeMessage(seconds, 'second');
};

const messageToDisplay = (timeDifference, dateTypeToCheck, dateType) => {
  const calculatedDifference = timeDifference / dateTypeToCheck;

  return timeRangeMessage(calculatedDifference, dateType);
};

export default function calculateTimeDifference(todoDate) {
  const minuteInSeconds = 60;
  const hourInSeconds = 3600;
  const dayInSeconds = 86400;
  const weekInSeconds = 604800;
  const monthInSeconds = 2419200;
  const yearInSeconds = 29030400;
  const timeNow = parseInt(Moment().unix(), 10);
  const timeDifference = timeNow - todoDate;

  if (timeDifference < minuteInSeconds) return calculateSeconds(timeDifference);
  if (timeDifference < hourInSeconds) return messageToDisplay(timeDifference, minuteInSeconds, 'minute');
  if (timeDifference < dayInSeconds) return messageToDisplay(timeDifference, hourInSeconds, 'hour');
  if (timeDifference < weekInSeconds) return messageToDisplay(timeDifference, dayInSeconds, 'day');
  if (timeDifference < monthInSeconds) return messageToDisplay(timeDifference, weekInSeconds, 'week');
  if (timeDifference < yearInSeconds) return messageToDisplay(timeDifference, monthInSeconds, 'month');

  return messageToDisplay(timeDifference, yearInSeconds, 'year');
}
