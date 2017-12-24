import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setTitle, setBody, addPost } from './../../actions';

class CreateTodo extends React.Component {
  static async handleDelete(event) {
    event.preventDefault();

    let success = true;

    await Axios.delete('/todos')
      .then(() => {})
      .catch(error => {
        success = false;
        console.error(error);
      });

    return success;
  }

  render() {
    return (
      <main>
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
                  className="six columns red-button"
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
      </main>
    );
  }
}

CreateTodo.propTypes = {
  entries: PropTypes.array.isRequired,
  titleChange: PropTypes.func.isRequired,
  bodyChange: PropTypes.func.isRequired,
  submitPost: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
};

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
