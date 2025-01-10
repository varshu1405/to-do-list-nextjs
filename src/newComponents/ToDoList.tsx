import { Todo } from "./Modal";
import SingleToDo from "./SingleToDo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex justify-between w-[90%] flex-wrap">
      {todos.map((todo) => (
        <SingleToDo setTodos={setTodos} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
