import React from "react";

interface InputFieldProps {
  todo: string;
  setTodo: (todo: string) => void;
  handleAdd: (e: React.FormEvent)=>void;
}

const InputField: React.FC<InputFieldProps> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="flex w-[90%] items-center justify-end m-2" onSubmit={handleAdd}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter your task"
        className="w-[100%] p-3 rounded-3xl shadow-lg"
      />
      <button
        type="submit"
        className="absolute w-[40px] h-[40px] sm:right-0 lg:right-16 md:right-10 m-1 bg-blue-500 text-white rounded-[40px] shadow-gray-700 shadow-md transition ease-in-out delay-150 hover:bg-blue-600 duration-300 hover:-translate-x-0 hover:scale-110"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
