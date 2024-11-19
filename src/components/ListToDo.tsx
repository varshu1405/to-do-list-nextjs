import { ToDoContext } from "@/context/ToDoContext"
import { useContext } from "react"

const ListToDo = () => {

    const { toDos, handleStatus,handleDelete } = useContext(ToDoContext) as ToDoContext

   

    return (
        <>
            <ul>
                {toDos.length > 0 && toDos.map((item) => {
                    return (
                        <li key={1} className="flex justify-between items-center">
                            <input type="checkbox" checked={item.completed} onChange={()=>handleStatus(item.id)} />
                           <label > {item.task} </label>
                            <div className="">
                           <button type="button" className="w-full p-2 m-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={()=> handleDelete(item.id)}> Delete</button>
                           </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ListToDo