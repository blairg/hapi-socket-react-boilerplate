/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setTodos } from './../../actions';
import subscribeToTodos from '../../subscribers/todoSubscriber';
import CreateTodo from '../containers/createTodo.jsx';
import Todo from '../containers/todo.jsx';
import calculateTimeDifference from './../../../shared/helpers/timeHelper';

class Todos extends React.Component {
  static getEntries(entries) {
    const entriesNew = [];
    let key = 0;

    entries.map(entry => {
      const updatedEntry = Object.assign({}, entry);
      updatedEntry.displayDate = calculateTimeDifference(
        updatedEntry.timestamp,
      );

      entriesNew.push(<Todo key={key} entry={updatedEntry} />);
      key += 1;

      return updatedEntry;
    });

    return entriesNew;
  }

  componentDidMount() {
    subscribeToTodos(data =>
      this.props.dispatchTodos(data),
    );
  }

  render() {
    return <CreateTodo entries={Todos.getEntries(this.props.entries)} />;
  }
}

Todos.propTypes = {
  entries: PropTypes.array.isRequired,
  dispatchTodos: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatchTodos: todos => {
    dispatch(setTodos(todos));
  },
});

const mapStateToProps = state => {
  const { todos } = state.setTodos;

  return {
    entries: todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
