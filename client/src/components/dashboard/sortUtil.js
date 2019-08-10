const SORT = Object.freeze({
  'new': 1,
  'old': 2,
  'random': 3,
});

const shuffleGames = array => {
    let shuffledGames = array.slice();
    for (let i = shuffledGames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledGames[i], shuffledGames[j]] = [shuffledGames[j], shuffledGames[i]];
    }
    return shuffledGames;
};

const sortNewestFirst = array => {
  let gamesByNew = array.slice();
  gamesByNew.sort((first, second) => {
    let date1 = new Date(JSON.parse(first.date));
    let date2 = new Date(JSON.parse(second.date));
    if (date1 - date2 > 0)
      return -1;
    else if (date1 - date2 < 0)
      return 1;
    else
      return 0;
  });
  return gamesByNew;
}

const sortOldestFirst = array => {
  let gamesByOld = array.slice();
  gamesByOld.sort((first, second) => {
    let date1 = new Date(JSON.parse(first.date));
    let date2 = new Date(JSON.parse(second.date));
    if (date1 - date2 > 0)
      return 1;
    else if (date1 - date2 < 0)
      return -1;
    else
      return 0;
  });
  return gamesByOld;
}

const getSortFunction = sortOption => {
  switch (sortOption) {
    case SORT.new:
      return sortNewestFirst;
    case SORT.old:
      return sortOldestFirst;
    case SORT.random:
      return shuffleGames;
  }
}

module.exports = {
  SORT,
  getSortFunction,
}
