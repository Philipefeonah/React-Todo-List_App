import TodoRowItem from "./TodoRowItems";

function TodoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteTodo = {props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
