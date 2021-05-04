let campus = {
  id: Number,
  name: String,
  lat: Number,
  long: Number,
  selected: Boolean
};


const campuses = [
  {
    id: 1,
    name: 'Nokia Campus Karaportti',
    address: 'Karaportti 3',
    lat: 60.221434757806406,
    long:  24.757031816028093,
    selected: true
  },
  {
    id: 2,
    name: 'Myyrmäki',
    lat: 60.25878006399605,
    long: 24.844784734714448,
    selected: false
  },
];

const addCampusObjectToArray = (campuses, campus) => {
    try{
      campuses.push(campus);
  console.log(`campuses are: ${campuses}, added campus: ${campus}`)
  return campuses;
    }
  catch(err){
  console.log(`Error occured in adding campus object: ${err}`);

  };
};

module.exports = campuses;
// module.exports = addCampusObjectToArray;
// module.exports = campus;
