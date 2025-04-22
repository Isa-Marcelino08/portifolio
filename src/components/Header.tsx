import telaInicial from "../assets/telaInicial.png";
import Estrela from "../assets/estrela.png";
import Globo from "../assets/globo.png";
import Selo from "../assets/selo.png";
import Lua from "../assets/lua.png";



import '../Header.css';

    const Header = () => {
        return (
          <section className='tela1'>
          <header className="header ">

<img src={telaInicial} alt="telaInicial" className='telaInicial'/>
<img src={Estrela} alt="estrelinha" className='estrela'/>
<img src={Selo} alt="Selo" className='Selo'/>
<img src={Globo} alt="Globo" className='Globo'/>
<img src={Lua} alt="Lua" className='Lua'/>



           
          </header>
        </section>
        );
      };
      

export default Header;