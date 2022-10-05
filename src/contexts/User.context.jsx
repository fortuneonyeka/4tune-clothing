import React,{createContext, useState, useEffect} from 'react'
import {onAuthStateChangedLister} from  "../utils/firebase/Firebase.utils"

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}

 

  useEffect(() => {
    const unsubscribe = onAuthStateChangedLister((user) => {
      console.log(user);
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}