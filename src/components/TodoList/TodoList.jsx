import { List, Item } from './TodoList.styled';

// export const TodoList = ({
//   todoItems,
//   onDeleteTodo,
//   onCompleteTodo,
//   onEditTodo,
//   mode,
// }) => (
//   <List>
//     {mode === 'edit' &&
//       todoItems.map(({ id, text, completed }) => (
//         <input key={id} completed={completed}>
//           {text}
//         </input>
//       ))}
//   </List>
// );

export const TodoList = ({
  todoItems,
  onDeleteTodo,
  onCompleteTodo,
  onEditTodo,
  mode,
}) => (
  <List>
    {mode === 'edit' &&
      todoItems.map(({ id, text, completed }) => <input key={id}></input>)}
    {todoItems.map(({ id, text, completed }) => (
      <Item key={id} completed={completed}>
        {text}
        <button type="button" onClick={() => onDeleteTodo(id)}>
          delete
        </button>
        <button type="button" onClick={() => onCompleteTodo(id)}>
          complete
        </button>
        <button type="button" onClick={() => onEditTodo(id)}>
          edit
        </button>
      </Item>
    ))}
  </List>
);
