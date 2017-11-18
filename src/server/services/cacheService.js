import cache from 'memory-cache';

export default () => {
  const service = {};
  const cacheKey = 'hapi-boilerplate-key';

  service.get = () => {
    const entry = cache.get(cacheKey);

    if (entry) {
      return JSON.parse(entry);
    }

    return [];
  };

  service.set = (values, timeout = 60000) => {
    if (values instanceof Array) {
      cache.put(cacheKey, JSON.stringify(values), timeout);
    }
  };

  return service;
};
