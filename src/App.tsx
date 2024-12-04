import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { MainLayout } from './MainLayout'
import { Register } from './pages/Register'
import { AdminHome } from './pages/admin/AdminHome'
import { AdminSearch } from './pages/admin/AdminSearch'
import { AdminEncounter } from './pages/admin/AdminEncounter'
import { AdminPatientInfo } from './pages/admin/AdminPatientInfo'

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminHome />} />
                    <Route path="/admin/search" element={<AdminSearch />} />
                    <Route path="/admin/encounter" element={<AdminEncounter />} />
                    <Route path="/admin/patient/:id" element={<AdminPatientInfo />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default App