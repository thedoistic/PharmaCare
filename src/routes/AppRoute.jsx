import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthenticationIndex from "../pages/authentication/AuthenticationIndex"
import Login from "../pages/authentication/login/Login"
import SignUp from "../pages/authentication/signup/SignUp"
import CustomerIndex from "../pages/customer/CustomerIndex"
import HomePage from "../pages/customer/HomePage"
import About from "../pages/customer/About"
import ContactUs from "../pages/customer/ContactUs"
import Brands from "../pages/customer/Brands"
import News from "../pages/customer/News"
import OperationsAndPolicies from "../pages/customer/OperationsAndPolicies"
import Chatbot from "../Chatbot/Chatbot"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={CustomerIndex}>
                    <Route path="/" Component={HomePage} />
                    <Route path="/customer/About" Component={About} />
                    <Route path="/customer/ContactUs" Component={ContactUs} />
                    <Route path="/customer/Brands" Component={Brands} />
                    <Route path="/customer/News" Component={News} />
                    <Route path="/customer/OperationsAndPolicies" Component={OperationsAndPolicies} />
                    <Route path="/Chatbot/chatbot" Component={Chatbot} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

/*
                <Route path="/" Component={AuthenticationIndex}>
                    <Route path="/" Component={Login} />
                    <Route path="/login" Component={Login} />
                    <Route path="/signup" Component={SignUp} />
                </Route>

*/
