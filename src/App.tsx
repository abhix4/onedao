
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/dashboard/Home'

function App() {


  return (
     <div>
      <div className='p-md-0 w-100'>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
     </div>
  )
}

export default App
