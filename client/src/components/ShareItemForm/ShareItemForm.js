import React, { Component, Fragment } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import {
  updateNewItem,
  resetNewItem,
  resetNewItemImage
} from '../../redux/modules/ShareItemPreview';
import { graphql, compose } from 'react-apollo';
import { ADD_ITEM_MUTATION, VIEWER_QUERY } from '../../apollo/queries';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      open: false,
      fileSelected: '',
      done: false,
      selectedTags: [],
      imageurl: ''
    };
  }

  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ');
  }

  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleSelectTag(event) {
    this.setState({ selectedTags: event.target.value });
  }

  handleSelectFile(event) {
    this.setState({ fileSelected: this.fileInput.current.files[0] });
  }

  dispatchUpdate(values, tags, updateNewItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateNewItem({
          imageurl
        });
      });
    }
    updateNewItem({
      ...values,
      tags: this.applyTags(tags)
    });
  }
  addItem(values, addItemMutation, tags) {
    console.log(tags);
    // const {
    //   validity,
    //   files: [file]
    // } = this.fileInput.current;
    // if (!validity.valid || !file) return;
    try {
      const itemData = {
        title: values.title,
        description: values.description,
        tags: this.applyTags(tags)
      };
      addItemMutation({
        variables: {
          item: itemData
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { classes, tags, updateNewItem, addItemMutation } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          className={classes.title}
          component="h2"
          variant="display1"
          color="secondary"
          gutterBottom
        >
          Share. Borrow. Prosper.
        </Typography>
        <Form
          onSubmit={values => {
            console.log('im here');
            this.addItem(values, addItemMutation, tags);
          }}
          render={({ handleSubmit }) => (
            <form
              onSubmit={event => {
                handleSubmit(event);
              }}
            >
              <FormSpy
                subscription={{ values: true }}
                component={({ values }) => {
                  if (values) {
                    this.dispatchUpdate(values, tags, updateNewItem);
                  }
                  return '';
                }}
              />
              <fieldset className={classes.form}>
                <label htmlFor="item-name">
                  <Field
                    name="imageurl"
                    render={({ input, meta }) => (
                      <Fragment>
                        {!this.state.fileSelected ? (
                          <Button
                            onClick={() => this.fileInput.current.click()}
                            variant="contained"
                            color="primary"
                            className={classes.select}
                          >
                            <Typography>Select an Image</Typography>
                          </Button>
                        ) : (
                          <Button onClick={() => this.resetFileInput()}>
                            <Typography>Reset Image</Typography>
                          </Button>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          ref={this.fileInput}
                          hidden
                          onChange={event => this.handleSelectFile(event)}
                        />
                      </Fragment>
                    )}
                  />
                  <Field
                    name="title"
                    render={({ input, meta }) => (
                      <TextField
                        className={classes.itemName}
                        type="text"
                        name="nameItem"
                        placeholder="Name your item"
                        inputProps={{ ...input }}
                      />
                    )}
                  />
                </label>
                <label htmlFor="input2">
                  <Field
                    name="description"
                    render={({ input, meta }) => (
                      <TextField
                        className={classes.itemDescription}
                        type="text"
                        name="describeItem"
                        placeholder="Describe your item"
                        inputProps={{ ...input }}
                      />
                    )}
                  />
                </label>

                <Field
                  name="tags"
                  render={({ input, meta }) => (
                    <Fragment>
                      <InputLabel className={classes.tagLabel}>
                        Add some tags
                      </InputLabel>
                      <Select
                        multiple
                        label="Add tags"
                        name="tags"
                        renderValue={selectedTags => {
                          return this.generateTagsText(tags, selectedTags);
                        }}
                        className={classes.tags}
                        value={this.state.selectedTags}
                        onChange={event => this.handleSelectTag(event)}
                      >
                        {tags.map(tag => (
                          <MenuItem key={tag.id} value={tag.id}>
                            <Checkbox
                              checked={
                                this.state.selectedTags.indexOf(tag.id) > -1
                              }
                            />

                            <ListItemText primary={tag.title} />
                          </MenuItem>
                        ))}
                      </Select>
                    </Fragment>
                  )}
                />
              </fieldset>
              <fieldset className={classes.share}>
                <Button
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

const mapDispatchToProps = dispatch => ({
  updateNewItem(item) {
    dispatch(updateNewItem(item));
  },
  resetNewItem() {
    dispatch(resetNewItem());
  },
  resetNewItemImage() {
    dispatch(resetNewItemImage());
  }
});

const refetchQueries = [
  {
    query: VIEWER_QUERY
  }
];
export default connect(
  null,
  mapDispatchToProps
)(
  compose(
    graphql(ADD_ITEM_MUTATION, {
      options: { refetchQueries },
      name: 'addItemMutation'
    }),
    withStyles(styles)
  )(ShareItemForm)
);
