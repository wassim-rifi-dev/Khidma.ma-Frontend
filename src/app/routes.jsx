import {Route, Routes} from 'react-router-dom';
import Landing from '../features/services/pages/Landing';
import Register from '../features/auth/pages/Register';
import Login from '../features/auth/pages/Login';
import { useDarkMode } from '../shared/hooks/useDarkMode';
import IsAuthRoute from '../routes/IsAuthRoutes';
import RoleRoutes from '../routes/RoleRoutes';
import HomeRoute from '../routes/HomeRoute';
import ProfileRoute from '../routes/ProfileRoute';
import ClientHome from '../features/client/pages/Home';
import EditProfile from '../features/client/pages/EditProfile';
import Services from '../features/client/pages/Services';
import Professional from '../features/client/pages/Professional';
import ShowService from '../features/client/pages/ShowService';
import ProfessionalHome from '../features/professional/pages/Home';
import ProfilePreview from '../features/professional/pages/ProfilePreview';
import EditProfessionalProfile from '../features/professional/pages/EditProfile';
import Analistique from '../features/professional/pages/Analistique';
import Requests from '../features/professional/pages/Requests';
import RequestDetails from '../features/professional/pages/RequestDetails';
import CreateService from '../features/professional/pages/CreateService';
import ProfessionalServices from '../features/professional/pages/Services';
import ProfessionalServiceDetails from '../features/professional/pages/ServiceDetails';
import AdminDashboard from '../features/admin/pages/Dashboard';
import AdminUsers from '../features/admin/pages/Users';
import AdminProfessionals from '../features/admin/pages/Professionals';
import AdminServices from '../features/admin/pages/Services';
import AdminCategories from '../features/admin/pages/Categories';
import AdminAnalytics from '../features/admin/pages/Analytics';
import Messages from '../features/chat/pages/Messages';

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
            <Route path='/professional/profile/edit' element={
                <RoleRoutes allowedRole={['professional']}>
                    <EditProfessionalProfile />
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
            <Route path='/professional/requests' element={
                <RoleRoutes allowedRole={['professional']}>
                    <Requests />
                </RoleRoutes>
            } />
            <Route path='/professional/requests/:requestId' element={
                <RoleRoutes allowedRole={['professional']}>
                    <RequestDetails />
                </RoleRoutes>
            } />
            <Route path='/professional/services' element={
                <RoleRoutes allowedRole={['professional']}>
                    <ProfessionalServices />
                </RoleRoutes>
            } />
            <Route path='/professional/services/:serviceId' element={
                <RoleRoutes allowedRole={['professional']}>
                    <ProfessionalServiceDetails />
                </RoleRoutes>
            } />
            <Route path='/professional/services/create' element={
                <RoleRoutes allowedRole={['professional']}>
                    <CreateService />
                </RoleRoutes>
            } />
            <Route path='/admin/dashboard' element={
                <RoleRoutes allowedRole={['admin']}>
                    <AdminDashboard />
                </RoleRoutes>
            } />
            <Route path='/admin/users' element={
                <RoleRoutes allowedRole={['admin']}>
                    <AdminUsers />
                </RoleRoutes>
            } />
            <Route path='/admin/professionals' element={
                <RoleRoutes allowedRole={['admin']}>
                    <AdminProfessionals />
                </RoleRoutes>
            } />
            <Route path='/admin/services' element={
                <RoleRoutes allowedRole={['admin']}>
                    <AdminServices />
                </RoleRoutes>
            } />
            <Route path='/admin/categories' element={
                <RoleRoutes allowedRole={['admin']}>
                    <AdminCategories />
                </RoleRoutes>
            } />
            <Route path='/admin/analytics' element={
                <RoleRoutes allowedRole={['admin']}>
                    <AdminAnalytics />
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
            <Route path='/messages' element={
                <RoleRoutes allowedRole={['client', 'professional']}>
                    <Messages />
                </RoleRoutes>
            } />
            <Route path='/professional/:professionalId' element={
                <IsAuthRoute>
                    <Professional />
                </IsAuthRoute>
            } />
        </Routes>
    )
}
