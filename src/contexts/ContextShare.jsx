import { useState } from "react"
import { createContext } from "react"
export const addProjectContext = createContext()

const ContextShare = ({children}) => {
    const [addProjectResponse,setAddProjectResponse] = useState("")
  return (
    <addProjectContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
        {children}
    </addProjectContext.Provider>
  )
}

export default ContextShare
