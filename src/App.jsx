import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
