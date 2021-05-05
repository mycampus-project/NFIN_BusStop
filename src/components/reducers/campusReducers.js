import campuses from "../../Campuses";
import { getcampuses } from "../actions";



const initialState = {
  campuses: [campuses]
}

const campusesReducer = (state=initialState, action) => {
switch(action.type){
  case 'ADD_CAMPUS': {
    return {...state, campuses: [...state.campuses, action.payload]}
    //return new state containing current campuses
  }
  default:
    return state;
  }
}

// export const GCampuses = () => (dispatch, getState) => {
//   const campuses1 = getState().campuses;
//   return{
//     campuses1
//   }
// }

export default campusesReducer;
