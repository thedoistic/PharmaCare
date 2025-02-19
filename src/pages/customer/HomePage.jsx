import Intro from "../../components/customer/home/Intro/Intro";
import Infographic from "../../components/customer/home/Infographic/Infographic";
import ZigZag from "../../components/customer/home/ZigZag/ZigZag";
import Testimonials from "../../components/customer/home/Testemonials/Testimonials";
import CTA from "../../components/customer/home/CTA/CTA";

const HomePage = () => {
    return (
        <>
            <Intro />
            <Infographic />
            <ZigZag />
            <Testimonials /> 
            <CTA /> 
        </>
    )
}

export default HomePage;    