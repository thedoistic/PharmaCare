import './AdminIndex.css'
import Body from '../../components/admin/Body/Body'
import Sidebar from "../../components/admin/sidebar/sidebar"
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const AdminIndex = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                bgcolor: 'background.default'
            }}
        >
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    overflow: 'auto'
                }}
            >
                <Outlet />
            </Box>
        </Box>
    )
}

export default AdminIndex;