import {Route, Routes} from 'react-router-dom';
import Landing from '../pages/Landing';
import Register from '../pages/Auth/Register';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}