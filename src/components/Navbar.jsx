import { useState } from "react"

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = ()=> openMenu ? setOpenMenu(false) : setOpenMenu(true)


  return (
    <>
      <nav className="navbar">
          <ul className="navbar-items">
              <li className="navbar-logo"><a href="/">Ciber<span>héroes</span></a></li>
              <li><a href="/">Inicio</a></li>
              <li><a href="/test">Test evaluativo</a></li>
              <li><a href="/aprendamosjugando">Aprendamos jugando</a></li>
              <li><a href="/sobrenosotros">Sobre nosotros</a></li>
              <li className='icon-menu' onClick={handleMenu}>
                <span className={openMenu ? 'linea1 close' : 'linea1 open'}></span>
                <span className={openMenu ? 'linea2 close' : 'linea2 open'}></span>
                <span className={openMenu ? 'linea3 close' : 'linea3 open'}></span>
              </li>
          </ul>
          <div className={openMenu ? 'menu-responsive discover' : 'menu-responsive cover'}>
            <ul className="navbar-items">
            <li><a href="/">Inicio</a></li>
              <li><a href="/test">Test evaluativo</a></li>
              <li><a href="/aprendamosjugando">Aprendamos jugando</a></li>
              <li><a href="/sobrenosotros">Sobre nosotros</a></li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar