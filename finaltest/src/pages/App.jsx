import { useState } from 'react'
import '../App.css'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Search from '../Components/Search'
import Content from '../Components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Search></Search>
      <Content></Content>
    </>
    
  )
}

export default App
