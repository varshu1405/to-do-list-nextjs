import React, { useState } from "react";
import InputField from "./InputField";
import { Todo } from "./Modal";
import ToDoList from "./ToDoList";

const ToDoApp: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd =(e: React.FormEvent) => {
    e.preventDefault();
    if(todo.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      task: todo,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
}

  // console.log("ListTodo", todo);
  return (
    <div className="bg-blue-500 h-[100vh] flex flex-col items-center justify-center">
      <span className="text-white text-2xl">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ToDoApp;
