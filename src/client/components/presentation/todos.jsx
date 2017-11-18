/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import subscribeToTodos from '../../subscribers/todoSubscriber';
import CreateTodo from '../containers/createTodo.jsx';
import Todo from '../containers/todo.jsx';
import calculateTimeDifference from './../../../shared/helpers/timeHelper';

class Todos extends React.Component {
  static getEntries(entries) {
    const entriesNew = [];
    let key = 0;

    entries.map((entry) => {
      const updatedEntry = Object.assign({}, entry);
      updatedEntry.displayDate = calculateTimeDifference(updatedEntry.timestamp);

      entriesNew.push(<Todo key={key} entry={updatedEntry} />);
      key += 1;

      return updatedEntry;
    });

    return entriesNew;
  }
  constructor(props) {
    super(props);
    this.state = {
      entries: props.entries ? props.entries : [],
    };
  }

  componentDidMount() {
    subscribeToTodos(data => this.setState({
      entries: data,
    }));
  }

  render() {
    const entries = Todos.getEntries(this.state.entries ? this.state.entries : this.props.entries);

    return (
      <CreateTodo entries={entries} />
    );
  }
}

Todos.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default Todos;
