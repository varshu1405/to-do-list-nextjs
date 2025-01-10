import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { Todo } from "./Modal"
import { MdDone } from "react-icons/md"

type SingleToDoProps = {    
    todo: Todo
//   todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function SingleToDo({ todo, setTodos }: SingleToDoProps) {
  return (
    <form className="flex w-[90%] items-center justify-center m-2">
        <div className="flex bg-white px-2 py-2 rounded-md justify-between lg:w-[40%] w-[80%] flex-wrap">
       <div className="w-fit" >{todo.task} </div> 
       <div className="flex  w-[20%] justify-between ">
        <span className="mr-2">
        <AiFillEdit />
        </span>
        <span className="mr-2">
        <AiFillDelete  />
        </span>
        <span className="mr-2">
        <MdDone  />
        </span>
       </div>
       </div>
    </form>
  )
}

export default SingleToDo