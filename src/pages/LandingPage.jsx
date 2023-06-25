import Footer from "../components/Footer"
import Dispositivos from "../components/LandingPage/Dispositivos"
import Header from "../components/LandingPage/Header"
import InvestigacionSection from "../components/LandingPage/InvestigacionSection"
import LosAfectados from "../components/LandingPage/LosAfectados"
import OtrosResultados from "../components/LandingPage/OtrosResultados"
import Navbar from "../components/Navbar"

function LandingPage(){
    return(
        <>
            <Navbar/>
            <Header/>
            <InvestigacionSection/>
            <LosAfectados/>
            <Dispositivos/>
            <OtrosResultados/>
            <Footer/>
        </>
    )
}

export default LandingPage