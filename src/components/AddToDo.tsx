import { ToDoContext } from "@/context/ToDoContext"
import { FormEvent, useContext, useState } from "react"

const AddToDo = () => {

    const [todo, setToDo] = useState("")
    const { handleAddToDo } = useContext(ToDoContext) as ToDoContext

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (todo) {
            handleAddToDo(todo)
            setToDo('')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={todo}
                    onChange={(e) => setToDo(e.target.value)}
                    placeholder="Enter Your Task"
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >Add Task</button>
            </form>
        </>
    )
}

export default AddToDo