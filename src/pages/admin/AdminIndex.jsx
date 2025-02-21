import './AdminIndex.css'
import Body from '../../components/admin/Body/Body'
import Sidebar from "../../components/admin/sidebar/sidebar";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminIndex = () => {
    return (
        <div className="adminIndex">
            <Sidebar />
            <Body />
        </div>
    )
}

export default AdminIndex;