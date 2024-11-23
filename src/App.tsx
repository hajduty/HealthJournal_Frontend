import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { MainLayout } from './MainLayout'
import { Register } from './pages/Register'
import { AdminHome } from './pages/admin/AdminHome'
import { AdminSearch } from './pages/admin/AdminSearch'

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminHome />} />
                    <Route path="/admin/search" element={<AdminSearch />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default App