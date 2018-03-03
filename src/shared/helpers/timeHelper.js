import Moment from 'moment';

const timeRangeMessage = ({ value, label }) =>
  `${Math.round(value)} ${label}${value === 1 ? '' : 's'} ago`;

const calculateSeconds = timeDifference => {
  const seconds = timeDifference < 1 ? 1 : timeDifference;

  return timeRangeMessage({ value: seconds, label: 'second' });
};

const messageToDisplay = ({ timeDifference, dateTypeToCheck, dateType }) => {
  const calculatedDifference = timeDifference / dateTypeToCheck;

  return timeRangeMessage({ value: calculatedDifference, label: dateType });
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

  if (timeDifference < minuteInSeconds) {
    return calculateSeconds(timeDifference);
  }

  if (timeDifference < hourInSeconds) {
    return messageToDisplay({
      timeDifference,
      dateTypeToCheck: minuteInSeconds,
      dateType: 'minute',
    });
  }

  if (timeDifference < dayInSeconds) {
    return messageToDisplay({
      timeDifference,
      dateTypeToCheck: hourInSeconds,
      dateType: 'hour',
    });
  }

  if (timeDifference < weekInSeconds) {
    return messageToDisplay({
      timeDifference,
      dateTypeToCheck: dayInSeconds,
      dateType: 'day',
    });
  }

  if (timeDifference < monthInSeconds) {
    return messageToDisplay({
      timeDifference,
      dateTypeToCheck: weekInSeconds,
      dateType: 'week',
    });
  }

  if (timeDifference < yearInSeconds) {
    return messageToDisplay({
      timeDifference,
      dateTypeToCheck: monthInSeconds,
      dateType: 'month',
    });
  }

  return messageToDisplay({
    timeDifference,
    dateTypeToCheck: yearInSeconds,
    dateType: 'year',
  });
}
