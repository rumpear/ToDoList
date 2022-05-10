import { Component } from 'react';
import { Section } from './Section';

import { TodoList } from './TodoList';
import initialTodo from '../data/todos.json';

import { TodoInput } from './TodoList/TodoInput';
import { nanoid } from 'nanoid';
import { Filter } from './TodoList/Filter';

export class App extends Component {
  state = {
    todoItems: initialTodo,
    filter: '',
    mode: '',
  };

  deleteTodo = todoId => {
    this.setState(({ todoItems }) => ({
      todoItems: todoItems.filter(item => item.id !== todoId),
    }));
  };

  completeTodo = todoId =>
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item =>
        item.id === todoId ? { ...item, completed: !item.completed } : item,
      ),
    }));

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todoItems: [todo, ...prevState.todoItems],
    }));
  };

  editTodo = () => {
    this.setState({ mode: 'edit' });
  };

  filterTodo = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodo = () => {
    const { todoItems, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    return todoItems.filter(({ text }) =>
      text.toLowerCase().includes(normalizeFilter),
    );
  };

  countCompletedTodo = () => {
    const { todoItems } = this.state;

    return todoItems.reduce((total, todo) => {
      return todo.completed ? total + 1 : total;
    }, 0);
  };

  render() {
    const { todoItems, filter, mode } = this.state;

    const {
      addTodo,
      deleteTodo,
      completeTodo,
      filterTodo,
      getVisibleTodo,
      countCompletedTodo,
      editTodo,
    } = this;

    const completedItems = countCompletedTodo();
    const filteredTodo = getVisibleTodo();

    return (
      <>
        <TodoInput addTodoText={addTodo} />
        <TodoList
          onEditTodo={editTodo}
          todoItems={filteredTodo}
          onDeleteTodo={deleteTodo}
          onCompleteTodo={completeTodo}
          mode={mode}
        />
        <Filter value={filter} onChange={filterTodo} />
        <ul>
          <li>Общее количество задач: {todoItems.length}</li>
          <li>Количество выполненных задач: {completedItems} </li>
        </ul>
      </>
    );
  }
}

export default App;
