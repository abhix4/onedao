
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/dashboard/Home'
import LoginPage from './components/LoginWrapper'
import RegisterPage from './components/RegisterWrapper'

function App() {


  return (
     <div>
      <div className='p-md-0 w-100'>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
     </div>
  )
}

export default App
