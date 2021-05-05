import campuses from "../../Campuses";


const selected = (campus) => {
  return {
    type: 'SELECTED',
    campus: true
  };
};


const addcampus = (campus) => {
  return {
    type: 'ADD_CAMPUS',
    payload: {campus}
  };
};



const getcampuses = (state) => {
  const getc = state => state.campuses;
  return {
    type: 'GET_CAMPUSES',
    payload: {getc}
  };
};


const unselected = (campus) => {
  return {
    type: 'UNSELECTED',
    campus: false
  };
};

export {selected, unselected, getcampuses, addcampus};
