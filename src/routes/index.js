import {Routes} from 'react-router-dom'
import Route from './Route'

//paginas
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

export default function Rota() {
  return(
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}