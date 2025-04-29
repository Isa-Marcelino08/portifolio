// Importa a imagem 'telaInicial' da pasta de assets
import telaInicial from "../assets/telaInicial.png";

// Importa a imagem 'Estrela' da pasta de assets
import Estrela from "../assets/estrela.png";

// Importa a imagem 'Globo' da pasta de assets
import Globo from "../assets/globo.png";

// Importa a imagem 'Selo' da pasta de assets
import Selo from "../assets/selo.png";

// Importa a imagem 'Lua' da pasta de assets
import Lua from "../assets/lua.png";

// Importa o arquivo CSS para estilização do componente Header
import './Header.css';

// Declaração do componente funcional Header
const Header = () => {
    return (
        // Inicia uma seção com id 'inicio' e classe 'tela1'
        <section id="inicio" className='tela1'>
            {/* Cabeçalho da página com a classe 'header' */}
            <header className="header">

                {/* Imagem inicial exibida no cabeçalho */}
                <img src={telaInicial} alt="telaInicial" className='telaInicial'/>
                
                {/* Imagem de uma estrela exibida no cabeçalho */}
                <img src={Estrela} alt="estrelinha" className='estrela'/>
                
                {/* Imagem de um selo exibida no cabeçalho */}
                <img src={Selo} alt="Selo" className='Selo'/>
                
                {/* Imagem de um globo exibida no cabeçalho */}
                <img src={Globo} alt="Globo" className='Globo'/>
                
                {/* Imagem de uma lua exibida no cabeçalho */}
                <img src={Lua} alt="Lua" className='Lua'/>

            </header>
        </section>
    );
};

// Exporta o componente Header para ser usado em outros arquivos
export default Header;
