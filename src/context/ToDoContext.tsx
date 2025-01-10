import { createContext, useState, ReactNode, useMemo } from "react";

export type ToDos = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type ToDoContext = {
    toDos: ToDos[],
    handleAddToDo: (task: string) => void     
    handleStatus : (id: string) => void
    handleDelete : (id: string) => void
    handleEdit : (data: data) => void
}

 type data ={
    id: string;
    task: string;
 }

export const ToDoContext = createContext<ToDoContext | null>(null)

export const ToDoProvider = ({ children }: { children: ReactNode }) => {

    const [toDos, setToDos] = useState<ToDos[]>([])

    const handleAddToDo = (task: string) => {
        setToDos((prev: ToDos[]) => {
            const newToDo: ToDos[] = [{
                id: Math.random().toString(),
                task,
                completed: false,
                createdAt: new Date()
            }, ...prev]
            return newToDo
        })
    }

    const handleStatus = (id: string) => {

        setToDos((prev : ToDos[]) =>{
            const newToDo = prev.map((data)=>{
                if(data.id === id ){
                    return{ ... data, completed: !data.completed}
                }
                return data
            })
            return newToDo
        })  
    }

    const handleDelete =(id: string)=>{
        setToDos((prev : ToDos[])=> {
            const newToDo = prev.filter((task)=> task.id !== id)
            return newToDo
        })
    }


    const handleEdit = (data : data ) => {
        const {id, task} = data
    setToDos((prev : ToDos[]) =>{
        const newToDo = prev.map((data)=>{
            if(data.id === id){
                return {...data, task: task}
            }
            return data
        })
        return newToDo
    })

    }
    const contextValue = useMemo(() => ({
        toDos,
        handleAddToDo,
        handleStatus,
        handleDelete,
        handleEdit
    }), [toDos]);

    return (
        <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
    )
}

