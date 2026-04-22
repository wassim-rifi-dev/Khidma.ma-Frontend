import {Route, Routes} from 'react-router-dom';
import Landing from '../pages/Landing';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import { useDarkMode } from '../hooks/useDarkMode';
import IsAuthRoute from './IsAuthRoutes';
import RoleRoutes from './RoleRoutes';
import HomeRoute from './HomeRoute';
import ProfileRoute from './ProfileRoute';
import ClientHome from '../pages/Client/Home';
import EditProfile from '../pages/Client/EditProfile';
import Services from '../pages/Client/Services';
import Professional from '../pages/Client/Professional';
import ShowService from '../pages/Client/ShowService';
import ProfessionalHome from '../pages/Professional/Home';
import ProfilePreview from '../pages/Professional/ProfilePreview';
import Analistique from '../pages/Professional/Analistique';

export default function AppRoutes() {
    const {dark , changeMode} = useDarkMode();
    
    return (
        <Routes>
            {/* Private Route */}
            <Route path='/' element={<Landing isDark={dark} toogleDark={changeMode} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/professional/profile-preview' element={
                <RoleRoutes allowedRole={['professional']}>
                    <ProfilePreview />
                </RoleRoutes>
            } />
            <Route path='/professional/profile' element={
                <RoleRoutes allowedRole={['professional']}>
                    <ProfilePreview />
                </RoleRoutes>
            } />

            {/* Private Route */}
            <Route path='/home' element={<HomeRoute isDark={dark} toogleDark={changeMode} />} />
            <Route path='/client/home' element={
                <IsAuthRoute>
                    <ClientHome isDark={dark} toogleDark={changeMode} />
                </IsAuthRoute>
            } />
            <Route path='/professional/home' element={
                <RoleRoutes allowedRole={['professional']}>
                    <ProfessionalHome />
                </RoleRoutes>
            } />
            <Route path='/professional/analistique' element={
                <RoleRoutes allowedRole={['professional']}>
                    <Analistique />
                </RoleRoutes>
            } />
            <Route path='/profile' element={<ProfileRoute />} />
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
