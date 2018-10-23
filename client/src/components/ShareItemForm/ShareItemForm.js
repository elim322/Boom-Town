import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: 'Add Tag',
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
    const { classes, tags } = this.props;
    return (
      <div className={this.props.classes.root}>
        <Typography
          className={classes.title}
          component="h2"
          variant="h1"
          gutterBottom
        >
          SHARE. BORROW. PROSPER.
        </Typography>
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
                  className={classes.select}
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
                <Field
                  name="addTag"
                  render={({ input, meta }) => (
                    <Select
                      className={classes.tags}
                      value={this.state.tag}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'tags',
                        id: 'add-tag'
                      }}
                    >
                      {tags.map(tag => (
                        <MenuItem key={tag.id} value={tag.title}>
                          {tag.title}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </fieldset>
              <fieldset className={classes.share}>
                <Button
                  id="submit"
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.shareButton}
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
