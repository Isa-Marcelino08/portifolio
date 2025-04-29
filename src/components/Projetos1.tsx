// Importa a imagem do título "Projetos SESI"
import tituloprjsesi from "../assets/tituloprojetosesi.png";

// Importa a imagem principal dos projetos SESI
import imgprjsesi from "../assets/imgprojetos.png";

// Importa a imagem que representa os anos dos projetos SESI
import anosprjsesi from "../assets/anosPrj.png";

// Importa o arquivo CSS para estilização do componente Projeto1
import "./Projeto1.css";

// Declaração do componente funcional Projeto1
const Projeto1 = () => {
  return (
    // Seção principal do componente identificada pelo id 'projetosesi' e classe 'tela4'
    <section id="projetosesi" className="tela4">
      {/* Div principal que agrupa todos os elementos dos projetos SESI */}
      <div className="prjsesi">

        {/* Bloco de imagens gerais */}
        <div className="imagensgerais">
          {/* Exibe a imagem do título "Projetos SESI" */}
          <img 
            src={tituloprjsesi} /* Fonte da imagem */
            alt="prjsesi" /* Texto alternativo, exibido caso a imagem não carregue */
            className="tituloprjsesi" /* Classe para estilização */
          />
          {/* Exibe a imagem principal dos projetos */}
          <img 
            src={imgprjsesi} 
            alt="imagensprjsesi" 
            className="imgprjsesi" 
          />
        </div>

        {/* Bloco para exibir as datas e informações sobre os projetos */}
        <div className="datasprjsesi">
          {/* Exibe a imagem representando os anos dos projetos */}
          <img 
            src={anosprjsesi} 
            alt="anosprjsesi" 
            className="anosprjsesi" 
          />
          {/* Texto indicando o nome do projeto "Escola Mata Artistas" */}
          <p className="prjema">Escola Mata Artistas </p>
          {/* Texto indicando o nome do projeto "Povos Originários: Maias" */}
          <p className="prjmaias">Povos Originários: Maias </p>
          {/* Texto do projeto "Projeto Flink Sampa" com subtítulo */}
          <p className="prlflink">
            Projeto Flink Sampa <br />
            “Zumbi dos Palmares”
          </p>
        </div>
      </div>
    </section>
  );
};

// Exporta o componente Projeto1 para que possa ser usado em outros arquivos
export default Projeto1;

