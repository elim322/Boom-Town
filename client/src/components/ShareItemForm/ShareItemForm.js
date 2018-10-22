import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      open: false
    };
  }

  submitTheForm(e, form) {
    console.log('submitting!', form.getState().values);
    //fire mutation with form values
    !form.valid && form.reset();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <Typography>SHARE. BORROW. PROSPER.</Typography>
        <Form
          // validate={values => this.validate(values)}
          onSubmit={(e, form) => this.submitTheForm(e, form)}
          render={({ handleSubmit }) => (
            <form onSubmit={e => handleSubmit(e)}>
              <fieldset className={classes.form}>
                <Button
                  id="submit"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  SELECT IMAGE
                </Button>
                <label htmlFor="item-name">
                  <Field
                    name="item name"
                    render={({ input, meta }) => (
                      <TextField
                        className={classes.itemName}
                        name="itemName"
                        type="text"
                        placeholder="Name your item"
                        {...input}
                      />
                    )}
                  />
                </label>
                <label htmlFor="input2">
                  <Field
                    name="item-description"
                    render={({ input, meta }) => (
                      <TextField
                        className={classes.itemDescription}
                        name="itemDescription"
                        type="text"
                        placeholder="Describe your item"
                        {...input}
                      />
                    )}
                  />
                </label>
                <form autoComplete="off">
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">
                      Add some Tags
                    </InputLabel>
                    <Select
                      open={this.state.open}
                      onClose={this.handleClose}
                      onOpen={this.handleOpen}
                      value={this.state.age}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'tags',
                        id: 'demo-controlled-open-select'
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </form>
              </fieldset>
              <fieldset className={classes.shareButton}>
                <Button
                  id="submit"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  SHARE
                </Button>
              </fieldset>
            </form>
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
