
//define defaultstate if necessary

const initialState = {
  campuses: [],
  campus: {
    id: Number,
    name: '',
    lat: Number,
    long: Number,
    selected: Boolean
  }
}

const isSelectedReducer = (state = initialState, action) => { // state = {}
  switch (action.type) {
      case 'SELECTED':
        console.log("State to true");
        // action.campus.selected = true;
        return {
          ...state,
          selected: action.campus
        };
        // if (state == action.campus){
        //   state = action.campus;
        // return true;}


      case 'UNSELECTED':
        console.log("State to false");
        return {
          ...state,
          selected: action.campus
        };
      default:
        return state;
  }
};

export default isSelectedReducer;
