import {Route, Routes} from 'react-router-dom';
import Landing from '../pages/Landing';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}