import Moment from 'moment';

export default function calculateTimeDifference(blogEntryDate) {
  const now = parseInt(Moment().unix(), 10);
  const diff = now - blogEntryDate;

  if (diff === 0) {
    return '1 second ago';
  }

  if (diff === 60) {
    return '1 minute ago';
  }

  if (diff > 60) {
    const hours = diff / 3600;

    if (hours >= 1) {
      if (hours >= 24) {
        const days = hours / 24;

        if (days >= 7) {
          const weeks = days / 7;

          if (weeks >= 4) {
            const months = weeks / 4;

            if (months >= 12) {
              const years = months / 12;

              return `${Math.round(years)} week${(years === 1) ? '' : 's'} ago`;
            }

            return `${Math.round(months)} week${(months === 1) ? '' : 's'} ago`;
          }

          return `${Math.round(weeks)} week${(weeks === 1) ? '' : 's'} ago`;
        }

        return `${Math.round(days)} day${(days === 1) ? '' : 's'} ago`;
      }

      return `${Math.round(hours)} hour${(hours === 1) ? '' : 's'} ago`;
    }
    return `${Math.round(diff / 60)} minute${(diff === 1) ? '' : 's'} ago`;
  }
  return `${diff} seconds ago`;
}
