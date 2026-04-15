import {Route, Routes} from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import Landing from '../pages/Landing';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';

export default function AppRoutes() {
    const {dark , changeMode} = useDarkMode();
    return (
        <Routes>
            <Route path='/' element={<Landing isDark={dark} toogleDark={changeMode} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}