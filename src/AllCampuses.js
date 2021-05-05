
import { campuses } from "./Campuses";
//import { getcampuses } from "./components/actions";
import allReducers from "./components/reducers";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import campusesReducer from "./components/reducers/campusReducers";
import { StoreRounded } from "@material-ui/icons";
import { storeKeyNameFromField } from "@apollo/client/utilities";


//redux wrapper component that returns campuses
class AllCampuses extends Component {


  renderCampuses() {
    return this.props.allcampuses.map((value, i)=> {
      return (
        <div>
          <h1>{value+ "index: " + i}</h1>
          <button onClick={()=> this.props.getcampuses()}>getcampuses</button>
        </div>
      )
    })
  }

  render(){

    return (
      <div>{this.renderCampuses}</div>

    )
  };
}

//selector to get campuses
const getcampuses = state => state.campuses;
const mapStateToProps = (state) => {

  return{
    // allcampuses: state.campusesReducer.campuses
    allcampuses: getcampuses(state)
  }
}

const mapDispatchToProps = () => {
  return{
    getcampuses
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

