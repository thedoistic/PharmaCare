import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthenticationIndex from "../pages/authentication/AuthenticationIndex"
import Login from "../pages/authentication/login/Login"
import SignUp from "../pages/authentication/signup/SignUp"
import CustomerIndex from "../pages/customer/CustomerIndex"
import HomePage from "../pages/customer/HomePage"
import About from "../pages/customer/About"
import Brands from "../pages/customer/Brands"
import Chatbot from "../Chatbot/Chatbot"
import AdminIndex from "../pages/admin/AdminIndex"
import Medicine from "../pages/admin/Medicine/Medicine"
import Customers from "../pages/admin/Customers/Customers"
import OrderDetails from "../pages/admin/Orders/OrderDetails"
import ContactUs from "../pages/customer/ContactUs"
import News from "../pages/customer/News"
import OperationsAndPolicies from "../pages/customer/OperationsAndPolicies"
import Body from "../components/admin/Body/Body"
import InventoryLevel from "../pages/admin/InventoryLevel/InventoryLevel"


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthenticationIndex />}>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/signup" element={<SignUp />} />
                </Route>
                
                <Route path="/" element={<CustomerIndex />}>
                    <Route index element={<HomePage />} />
                    <Route path="customer/about" element={<About />} />
                    <Route path="customer/brands" element={<Brands />} />
                    <Route path="customer/chatbot" element={<Chatbot />} />
                    <Route path="customer/contactus" element={<ContactUs />} />
                    <Route path="customer/news" element={<News />} />
                    <Route path="customer/operationsandpolicies" element={<OperationsAndPolicies />} />
                </Route>

                <Route path="/admin" element={<AdminIndex />}>
                    <Route path="/admin/" element={<Body />} />
                    <Route path="/admin/medicine" element={<Medicine />} />
                    <Route path="/admin/inventory" element={<InventoryLevel />} />
                    <Route path="/admin/customers" element={<Customers />} />
                    <Route path="/admin/orders" element={<OrderDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
