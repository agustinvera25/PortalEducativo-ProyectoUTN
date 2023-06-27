import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AprendamosHeader from '../components/AprendamosPage/AprendamosHeader'
import CiberacosoIntro from '../components/AprendamosPage/CiberacosoIntro'
import CiberacosoProblematica from '../components/AprendamosPage/CiberacosoProblematica'

const AprendamosPage = () => {

  return (
    <>
        <Navbar/>
        <AprendamosHeader/>
        <CiberacosoIntro/>
        <CiberacosoProblematica/>
        <Footer/>
    </>
  )
}

export default AprendamosPage