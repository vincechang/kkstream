import idx from 'idx';

const getFilteredAndSorted = (array = [], sortBy = 'id-asc') => {
  const result = [...array];

  const useCompare = {
    'id-asc': (p, n) => {
      return idx(p, (_) => _.id) - idx(n, (_) => _.id);
    },
    'id-des': (p, n) => {
      return idx(n, (_) => _.id) - idx(p, (_) => _.id);
    },
    'name-a-z': (p, n) => {
      const pName = idx(p, (_) => _.username);
      const nName = idx(n, (_) => _.username);
      if (pName < nName) return -1;
      if (pName < nName) return 1;
      return 0;
    },
  };

  // TODO: filter

  result.sort((prev, next) => {
    return useCompare[sortBy](prev, next);
  });

  return result;
};

export default getFilteredAndSorted;
