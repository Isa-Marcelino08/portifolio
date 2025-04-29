// Importa o arquivo CSS para estilização do componente Nav
import './Nav.css';

// Importa a imagem do logotipo chamada 'isalogo' da pasta de assets
import logo from "../assets/isalogo.png";

// Declaração do componente funcional Nav
const Nav = () => {
  return (
    // Cria um contêiner principal
    <div>
      {/* Define a barra de navegação com a classe 'navbar' */}
      <nav className="navbar">
        {/* Área do logotipo dentro da navbar */}
        <div className="logo-area">
          {/* Exibe a imagem do logotipo com a classe 'logo' */}
          <img src={logo} alt="Logo" className='logo'/>
        </div>
        {/* Lista de links de navegação */}
        <ul className="nav-links">
          {/* Cada link aponta para diferentes seções da página */}
          <li><a className='' href="#inicio">INÍCIO</a></li> {/* Link para a seção 'INÍCIO' */}
          <li><a href="#sobremim">SOBRE MIM</a></li> {/* Link para a seção 'SOBRE MIM' */}
          <li><a href="#educacaoid">EDUCAÇÃO</a></li> {/* Link para a seção 'EDUCAÇÃO' */}
          <li><a href="#experiencia">EXPERIÊNCIAS</a></li> {/* Link para a seção 'EXPERIÊNCIAS' */}
          <li><a href="#projetosesi">SESI</a></li> {/* Link para a seção 'SESI' */}
          <li><a href="#prjsenainav">SENAI</a></li> {/* Link para a seção 'SENAI' */}
          <li><a href="#carrossel">FOTOS</a></li> {/* Link para a seção 'FOTOS' */}
        </ul>
      </nav>
    </div>
  );
}

// Exporta o componente Nav para ser utilizado em outros arquivos
export default Nav;
