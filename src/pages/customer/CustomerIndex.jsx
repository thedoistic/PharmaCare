import { Outlet } from "react-router-dom";
import Header from "../../components/customer/header/Header";
import Footer from "../../components/customer/Footer/Footer";
import Chatbot from "../../Chatbot/Chatbot"; 

const CustomerIndex = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Chatbot />
        </>
    );
};

export default CustomerIndex;
