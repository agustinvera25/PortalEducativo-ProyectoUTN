const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-items">
            <li className="navbar-logo"><a href="/">Ciber<span>héroes</span></a></li>
            <li><a href="/">Inicio</a></li>
            <li><a href="/test">Test evaluativo</a></li>
            <li><a href="/aprendamosjugando">Aprendamos jugando</a></li>
            <li><a href="/nosotros">Sobre nosotros</a></li>
        </ul>
    </nav>
  )
}

export default Navbar