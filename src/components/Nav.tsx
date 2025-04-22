
import '../Nav.css';
import logo from "../assets/isalogo.png";

const Nav = () =>{
  return (
    <div>
      <nav className="navbar">
        <div className="logo-area">
          <img src={logo} alt="Logo" className='logo'/>
        </div>
        <ul className="nav-links">
          <li><a className='' href="#menu">MENU</a></li>
          <li><a href="#quem-sou">QUEM SOU</a></li>
          <li><a href="#educacao">EDUCAÇÃO</a></li>
          <li><a href="#experiencias">EXPERIENCIAS</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;