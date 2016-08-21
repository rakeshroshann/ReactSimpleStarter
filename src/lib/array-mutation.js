const addCounter = (list) => {
  return list.concat(0);
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

export {
  addCounter,
  removeCounter
};