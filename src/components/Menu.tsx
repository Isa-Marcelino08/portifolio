// Importa a imagem 'quemSou' da pasta de assets
import quemSou from "../assets/quemSou.png";

// Importa a imagem 'fotoisa' da pasta de assets
import fotoisa from "../assets/foto1.png";

// Importa a imagem 'duasestrelas' da pasta de assets
import duasestrelas from "../assets/duplaestrela.png";

// Importa a imagem 'estrela2' da pasta de assets
import estrela2 from "../assets/estrela2.png";

// Importa o arquivo CSS para estilização do componente Menu
import "./Menu.css";

// Declaração do componente funcional Menu
const Menu = () => {
  return (
    // Inicia uma seção com id 'sobremim' e classe 'tela2'
    <section id="sobremim" className="tela2">
      {/* Div principal do menu */}
      <div className="menu">
        {/* Div para os elementos do topo */}
        <div className="topo">
          {/* Imagem representando 'quem sou' exibida no topo */}
          <img src={quemSou} alt="quemsou" className="quemsou" />
          {/* Imagem de Isabely exibida no topo */}
          <img src={fotoisa} alt="minhafoto" className="fotoisa" />
        </div>

        {/* Imagem de duas estrelas exibida na seção */}
        <img src={duasestrelas} alt="duasestrelas" className="duasestrelas" />
        
        {/* Imagem de uma estrela exibida na seção */}
        <img src={estrela2} alt="estrela2" className="estrela2" />
        
        {/* Texto com as informações sobre Isabely */}
        <p className="textinho">
          Meu nome é Isabely, tenho 17 anos e estou atualmente no terceiro ano
          do Ensino Médio. Tenho o sonho de estudar no exterior e participar de
          missões, com o desejo de presenciar e compartilhar a manifestação do
          Espírito Santo na vida das pessoas. Sou comunicativa, apaixonada por
          música — dificilmente estou sem meus fones de ouvido — e tenho grande
          interesse por fotografia. Embora esteja no início da minha jornada
          nessa área, busco constantemente evoluir para registrar momentos
          significativos e especiais para as pessoas.
        </p>
      </div>
    </section>
  );
};

// Exporta o componente Menu para ser utilizado em outros arquivos
export default Menu;
