// Importando os arquivos de estilo e imagens para serem usados no componente
import "./Experiencia.css"; // Arquivo CSS para estilização
import tituloexperiencia from "../assets/experiencia.png"; // Imagem do título da seção de experiência
import tokki from "../assets/tokki_doces.png"; // Imagem relacionada à marca de doces

// Definindo o componente funcional "Experiencia"
const Experiencia = () => {
  return (
    // Seção principal que será renderizada no HTML
    <section id="experiencia" className="tela6">
      {/* Container para as experiências gerais */}
      <div className="experienciasgeral">

        {/* Div que contém as imagens */}
        <div className="imgexperiencias">
          {/* Imagem do título da seção de experiência */}
          <img src={tituloexperiencia} alt="tituloexperiencia" className="tituloexperiencia" />
          {/* Imagem da marca de doces Tokki */}
          <img src={tokki} alt="tokki" className="tokki" />
        </div>

        {/* Div que contém o texto descritivo das experiências */}
        <div className="textoexperiencias">
          {/* Lista de experiências */}
          <ul className="listaexperiencias">
            <li className="van">
              Trabalhei como monitora infantil em <br /> uma van escolar
            </li>
            <li className="doces">
              Criei uma marca de doces para venda
            </li>
            <li className="fotografia">
              Trabalho de voluntária de fotografia na <br /> minha igreja
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Exportando o componente para ser usado em outras partes da aplicação
export default Experiencia;
