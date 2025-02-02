import { createContext, useState } from "react"

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [score, setScore] = useState(0)

  return (
    <Context.Provider value={[score, setScore]}>{children}</Context.Provider>
  )
}
export default ContextProvider
