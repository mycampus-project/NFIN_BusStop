import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

export default function PreferencesMenu() {
  const [state, setState] = React.useState({
    campus1: false,
    campus2: false,
    campus3: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose Campuses</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.campus1} onChange={handleChange} name="campus1" />}
          label="Campus1"
        />
        <FormControlLabel
          control={<Switch checked={state.campus2} onChange={handleChange} name="campus2" />}
          label="Campus2"
        />
        <FormControlLabel
          control={<Switch checked={state.campus3} onChange={handleChange} name="campus3" />}
          label="Campus3"
        />
      </FormGroup>
    </FormControl>
  );
}
