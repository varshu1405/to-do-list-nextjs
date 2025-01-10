import { ToDoContext } from "@/context/ToDoContext"
import { useContext, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md"

const ListToDo = () => {

    const { toDos, handleStatus,handleDelete, handleEdit } = useContext(ToDoContext) as ToDoContext
    const [openModal, setOpenModal] = useState(false)

    const Modal =() => {
     return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg">
          <h1 className="text-2xl font-bold">Edit Task</h1>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg mt-2" />
          <button type="button" className="w-full p-2 m-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" > Update</button>
          <button type="button" className="w-full p-2 m-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300" onClick={()=>setOpenModal(false)}> Cancel</button>
        </div>
        </div> 
    )
    }


    return (
            <ul>
                {toDos.length > 0 && toDos.map((item) => {
                    return (
                        <li key={1} className="flex justify-between items-center">
                            <input type="checkbox" checked={item.completed} onChange={()=>handleStatus(item.id)} />
                           <label className=  {item.completed ? "line-through" :''}>  {item.task} </label>
                            <div className="flex mt-2">
                            <FaEdit className="text-blue-700" size={18} onClick={() => setOpenModal(true)} />
                            <MdDeleteOutline className="text-red-700" size={22} onClick={()=> handleDelete(item.id)}/>
                           {/* <button type="button" className="w-full p-2 m-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" > Delete</button> */}
                           </div>
                        </li>
                    )
                })}
                {openModal && <Modal />}
            </ul>
    )
}

export default ListToDo