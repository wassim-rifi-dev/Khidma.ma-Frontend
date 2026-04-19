import {Route, Routes} from 'react-router-dom';
import Landing from '../pages/Landing';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import { useDarkMode } from '../hooks/useDarkMode';
import HomeRoute from './HomeRoute';
import IsAuthRoute from './IsAuthRoutes';
import RoleRoutes from './RoleRoutes';
import Home from '../pages/Client/Home';

export default function AppRoutes() {
    const {dark , changeMode} = useDarkMode();
    
    return (
        <Routes>
            {/* Private Route */}
            <Route path='/' element={<Landing isDark={dark} toogleDark={changeMode} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            {/* Private Route */}
            <Route path='/home' element={
                <IsAuthRoute> <HomeRoute /> </IsAuthRoute>
            } />
        </Routes>
    )
}