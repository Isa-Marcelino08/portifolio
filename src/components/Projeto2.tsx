// Importa a imagem do título do projeto SENAI
import tituloprjsenai from "../assets/prjsenai.png";

// Importa a imagem do título do projeto Arcadismo
import arcadismotitulo from "../assets/arcadismo.png";

// Importa a imagem do título do projeto Xavantes
import xavantestitulo from "../assets/xavantes.png";

// Importa a imagem do título do projeto Veterinário
import veterinariotitulo from "../assets/veterinario.png";

// Importa a imagem representativa do projeto Arcadismo
import arcadismoimg from "../assets/arcadismo.img.png";

// Importa a imagem representativa do projeto Xavantes
import xavantesimg from "../assets/xavantes.img.png";

// Importa a imagem representativa do projeto Veterinário
import veterinarioimg from "../assets/veterinario.img.png";

// Importa a imagem do ícone "saiba mais"
import saibamaisimgs from "../assets/saibamais.png";

// Importa o arquivo CSS para estilização do componente Projeto2
import "./Projeto2.css";

// Declaração do componente funcional Projeto2
const Projeto2 = () => {
  return (
    // Seção principal do componente, identificada pelo id 'prjsenainav' e classe 'tela5'
    <section id="prjsenainav" className="tela5">
      {/* Div principal que agrupa os elementos dos projetos SENAI */}
      <div className="prjsenai">

        {/* Exibe o título principal dos projetos SENAI */}
        <div className="titulo">
          <img
            src={tituloprjsenai} /* Imagem do título dos projetos SENAI */
            alt="Título Projetos Senai" /* Texto alternativo caso a imagem não carregue */
            className="tituloprjsenai" /* Classe para estilização da imagem do título */
          />
        </div>

        {/* Bloco que contém as imagens e títulos de cada projeto */}
        <div className="imgsprjsenai">

          {/* Bloco para o projeto Arcadismo */}
          <div className="projeto-box">
            <img 
              src={arcadismoimg} /* Imagem representativa do projeto Arcadismo */
              alt="Imagem Arcadismo" /* Texto alternativo da imagem */
              className="arcadismoimg" /* Classe para estilização da imagem */
            />
            <img 
              src={arcadismotitulo} /* Título do projeto Arcadismo */
              alt="Título Arcadismo" /* Texto alternativo do título */
              className="arcadismotitulo" /* Classe para estilização do título */
            />
          </div>

          {/* Bloco para o projeto Xavantes */}
          <div className="projeto-box">
            <img 
              src={xavantesimg} /* Imagem representativa do projeto Xavantes */
              alt="Imagem Xavantes" /* Texto alternativo da imagem */
              className="xavantesimg" /* Classe para estilização da imagem */
            />
            <img 
              src={xavantestitulo} /* Título do projeto Xavantes */
              alt="Título Xavantes" /* Texto alternativo do título */
              className="xavantestitulo" /* Classe para estilização do título */
            />
          </div>

          {/* Bloco para o projeto Veterinário */}
          <div className="projeto-box">
            <img 
              src={veterinarioimg} /* Imagem representativa do projeto Veterinário */
              alt="Imagem Veterinário" /* Texto alternativo da imagem */
              className="veterinarioimg" /* Classe para estilização da imagem */
            />
            <img 
              src={veterinariotitulo} /* Título do projeto Veterinário */
              alt="Título Veterinário" /* Texto alternativo do título */
              className="veterinariotitulo" /* Classe para estilização do título */
            />
          </div>
        </div>

        {/* Bloco com textos explicativos sobre cada projeto */}
        <div className="textosprjsenai">
          <p className="prjarcadismo">
            Trabalho interativo sobre o Arcadismo com a finalidade de ajudar os
            estudantes a estudarem de uma forma divertida.
          </p>
          <p className="prjxavantes">
            Site acerca dos Xavantes, criado para conscientizar as pessoas
            acerca desse povo indígena e sua difícil história.
          </p>
          <p className="prjveterinario">
            Site Veterinário criado e produzido em conjunto. Possui várias funcionalidades e interatividades.
          </p>
        </div>

        {/* Ícones de "saiba mais" para cada projeto, com links externos */}
        <div className="saibamais">

          {/* Link para o site do projeto Arcadismo */}
          <a
            href="https://anacarolina-23.github.io/Arcadismo_3E/"
            target="_blank" /* Abre o link em uma nova aba */
            rel="noopener noreferrer" /* Segurança ao abrir links externos */
          >
            <img 
              src={saibamaisimgs} /* Ícone "saiba mais" */
              alt="Saiba mais Arcadismo" /* Texto alternativo do ícone */
              className="saibamaisimgs1" /* Classe para estilização do ícone */
            />
          </a>

          {/* Link para o site do projeto Xavantes */}
          <a
            href="https://thapassos.github.io/Os-Xavantes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={saibamaisimgs} 
              alt="Saiba mais Xavantes" 
              className="saibamaisimgs2" 
            />
          </a>

          {/* Link para o site do projeto Veterinário */}
          <a
            href="https://isa-marcelino08.github.io/prjveterin-rio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={saibamaisimgs} 
              alt="Saiba mais Veterinário" 
              className="saibamaisimgs3" 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

// Exporta o componente Projeto2 para uso em outros arquivos
export default Projeto2;

