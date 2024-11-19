import AddToDo from "@/components/AddToDo"
import ListToDo from "@/components/ListToDo"
import { ToDoProvider } from "@/context/ToDoContext"

const Page = () => {
  return (
    <div className="flex justify-center w-full p-20">
      <div className="flex flex-col">
      <ToDoProvider>
        <h2 className="flex justify-center font-bold text-xl m-5"> ToDoList </h2>
        <AddToDo />
        <ListToDo />
      </ToDoProvider>
      </div>
    </div>
  )
}

export default Page