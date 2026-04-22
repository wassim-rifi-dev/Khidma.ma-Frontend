import {Route, Routes} from 'react-router-dom';
import Landing from '../pages/Landing';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import { useDarkMode } from '../hooks/useDarkMode';
import HomeRoute from './HomeRoute';
import IsAuthRoute from './IsAuthRoutes';
import RoleRoutes from './RoleRoutes';
import Home from '../pages/Client/Home';
import Profile from '../pages/Client/Profile';
import EditProfile from '../pages/Client/EditProfile';
import Services from '../pages/Client/Services';
import Professional from '../pages/Client/Professional';
import ShowService from '../pages/Client/ShowService';
import ProfilePreview from '../pages/Professional/ProfilePreview';

export default function AppRoutes() {
    const {dark , changeMode} = useDarkMode();
    
    return (
        <Routes>
            {/* Private Route */}
            <Route path='/' element={<Landing isDark={dark} toogleDark={changeMode} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/professional/profile-preview' element={<ProfilePreview />} />

            {/* Private Route */}
            <Route path='/home' element={
                <IsAuthRoute>
                    <Home />
                </IsAuthRoute>
            } />
            <Route path='/profile' element={
                <IsAuthRoute>
                    <Profile />
                </IsAuthRoute>
            } />
            <Route path='/profile/edit' element={
                <IsAuthRoute>
                    <EditProfile />
                </IsAuthRoute>
            } />
            <Route path='/services' element={
                <IsAuthRoute>
                    <Services />
                </IsAuthRoute>
            } />
            <Route path='/services/:serviceId' element={
                <IsAuthRoute>
                    <ShowService />
                </IsAuthRoute>
            } />
            <Route path='/professional/:professionalId' element={
                <IsAuthRoute>
                    <Professional />
                </IsAuthRoute>
            } />
        </Routes>
    )
}
