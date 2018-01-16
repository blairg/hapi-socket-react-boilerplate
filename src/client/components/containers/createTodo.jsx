/* eslint-disable no-console */

// @flow

import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setTitle, setBody, addPost } from './../../actions';

type DefaultProps = {
  title: '',
  titleChange: () => {},
  body: '',
  bodyChange: () => {},
  submitPost: () => {},
  entries: '',
};

type Props = {
  title: string,
  titleChange: Function,
  body: string,
  bodyChange: Function,
  submitPost: Function,
  entries: string,
};

class CreateTodo extends React.Component<DefaultProps, Props, void> {
  static defaultProps: Object;

  static async handleDelete(event) {
    event.preventDefault();

    let success = true;

    // TODO: Should be abstracted to a data service/provider.
    // Must be a recognized way of doing this.
    await Axios.delete('/todos')
      .then(() => {})
      .catch(error => {
        success = false;
        // TODO: Use a proper logger.
        console.error(error);
      });

    return success;
  }

  render() {
    return (
      <React.Fragment key="blogContainerKey">
        <div id="blogContainer" className="container">
          <div className="row">
            <div className="six columns blogEntriesCreator">
              <h1>Create a Todo</h1>
              <div className="row form-field">
                <label htmlFor="title" className="two columns label--required">
                  Title
                </label>
                <section>
                  <input
                    id="title"
                    name="title"
                    className="ten columns"
                    required
                    type="text"
                    value={this.props.title}
                    onChange={this.props.titleChange}
                  />
                </section>
              </div>

              <div className="row form-field">
                <label htmlFor="body" className="two columns label--required">
                  Body
                </label>
                <section>
                  <input
                    id="body"
                    name="body"
                    className="ten columns"
                    required
                    type="text"
                    value={this.props.body}
                    onChange={this.props.bodyChange}
                  />
                </section>
              </div>

              <div className="row form-buttons">
                <button
                  type="submit"
                  className="six columns delete-button"
                  onClick={CreateTodo.handleDelete}
                >
                  Delete All
                </button>
                <button
                  type="submit"
                  className="six columns button-primary"
                  onClick={this.props.submitPost}
                >
                  Create
                </button>
              </div>
            </div>
            <div className="six columns blogEntriesContainer">
              <div id="blogEntries" className="blogEntries">
                {this.props.entries}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// CreateTodo.propTypes = {
//   entries: PropTypes.array.isRequired,
//   titleChange: PropTypes.func.isRequired,
//   bodyChange: PropTypes.func.isRequired,
//   submitPost: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   body: PropTypes.string,
// };

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  titleChange: event => {
    dispatch(setTitle(event.target.value));
  },
  bodyChange: event => {
    dispatch(setBody(event.target.value));
  },
  submitPost: () => {
    dispatch(addPost());
  },
});

/* istanbul ignore next */
const mapStateToProps = state => {
  const { title, body } = state;

  return {
    title,
    body,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
