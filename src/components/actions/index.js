
const selected = (campus) => {
  return {
    type: 'SELECTED',
    campus: true
  };
};

const unselected = (campus) => {
  return {
    type: 'UNSELECTED',
    campus: false
  };
};

export {selected, unselected};
