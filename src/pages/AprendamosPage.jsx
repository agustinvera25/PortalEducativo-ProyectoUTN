import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AprendamosHeader from '../components/AprendamosPage/AprendamosHeader'
import CiberacosoIntro from '../components/AprendamosPage/CiberacosoIntro'
import CiberacosoProblematica from '../components/AprendamosPage/CiberacosoProblematica'
import CiberacosoQueHacer from '../components/AprendamosPage/CiberacosoQueHacer'
import CiberacosoConsejos from '../components/AprendamosPage/CiberacosoConsejos'

const AprendamosPage = () => {

  return (
    <>
        <Navbar/>
        <AprendamosHeader/>
        <CiberacosoIntro/>
        <CiberacosoProblematica/>
        <CiberacosoQueHacer/>
        <CiberacosoConsejos/>
        <Footer/>
    </>
  )
}

export default AprendamosPage