import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ShareItemForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  submitTheForm(e, form) {
    console.log('submitting!', form.getState().values);
    //fire mutation with form values
    !form.valid && form.reset();
  }

  render() {
    console.log(this.state);
    return (
      <Grid className="App">
        <button id="submit" type="submit">
          SELECT IMAGE
        </button>
        <Form
          // validate={values => this.validate(values)}
          onSubmit={(e, form) => this.submitTheForm(e, form)}
          render={({ handleSubmit }) => (
            <form onSubmit={e => handleSubmit(e)}>
              <fieldset>
                <label htmlFor="input1">
                  input2:{' '}
                  <Field
                    name="input1"
                    render={({ input, meta }) => (
                      <input
                        id="item-name"
                        name="item-name"
                        type="text"
                        placeholder="Name your item"
                      />
                    )}
                  />
                </label>
                <label htmlFor="input2">
                  input2:{' '}
                  <Field
                    name="item-description"
                    render={({ input, meta }) => (
                      <input
                        id="item-description"
                        name="item-description"
                        type="text"
                        placeholder="Describe your item"
                      />
                    )}
                  />
                </label>
              </fieldset>
              <fieldset>
                <Button id="submit" type="submit">
                  SHARE
                </Button>
              </fieldset>
            </form>
          )}
        />
      </Grid>
    );
  }
}

export default ShareItemForm;
