import './App.css'
import Content from './components/Content'
import { createContext, useState } from 'react'
import React from 'react'

export const UserContext = React.createContext()

function App() {
 
  const [content,setContent] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. ')

  return (
    <>
      <UserContext.Provider value={content}>
        <Content/>
      </UserContext.Provider>
    </>
  )
}


export default App
