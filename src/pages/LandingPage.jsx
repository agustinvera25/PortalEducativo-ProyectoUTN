import Dispositivos from "../components/LandingPage/Dispositivos"
import Header from "../components/LandingPage/Header"
import InvestigacionSection from "../components/LandingPage/InvestigacionSection"
import LosAfectados from "../components/LandingPage/LosAfectados"
import Navbar from "../components/Navbar"

function LandingPage(){
    return(
        <>
            <Navbar/>
            <Header/>
            <InvestigacionSection/>
            <LosAfectados/>
            <Dispositivos/>
        </>
    )
}

export default LandingPage