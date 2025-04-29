// Importa imagens que serão usadas na seção de educação
import tituloEducacao from "../assets/educacao.png";
import anosSesi from "../assets/data1.png";
import anosSenai from "../assets/data2.png";
import seta from "../assets/seta.png";
import tituloqualidade from "../assets/qualidades.png";
import linha from "../assets/linha.png";
import titulocontato from "../assets/contato.png";
import imagemlocalizacao from "../assets/local.png";
import imagememail from "../assets/email.png";
import quintoano from "../assets/quinto _ano.png";
import nonoano from "../assets/nono_ano.png";
import terceiroano from "../assets/terceito_ano.png";

// Importa o CSS específico para estilizar esse componente
import "./Educacao.css";

// Componente funcional React
const Educacao = () => {
  return (
    // Define a seção principal com uma classe para estilização e um id para navegação
    <section id="educacaoid" className="tela3">

      {/* Bloco principal que engloba todas as partes da seção */}
      <div className="escolaridade">

        {/* Bloco da educação escolar */}
        <div className="educacao">
          {/* Título da seção (imagem) */}
          <img src={tituloEducacao} alt="tituloEducacao" className="tituloEducacao" />

          {/* Anos no SESI (imagem + descrição) */}
          <img src={anosSesi} alt="anosSesi" className="anosSesi" />
          <p className="texto2024">
            Ensino Fundamental e Ensino Médio <br />
            na escola SESI
          </p>

          {/* Anos no SENAI (imagem + descrição) */}
          <img src={anosSenai} alt="anosSenai" className="anosSenai" />
          <p className="texto2025">Ensino Técnico no Senai</p>
        </div>

        {/* Bloco da conquista de bolsa de estudos */}
        <div className="bolsaDeEstudos">
          <img src={seta} alt="seta" className="seta" />
          <p className="bolsaSesi">Ganhei bolsa de estudos durante o ensino médio</p>
        </div>

        {/* Bloco de qualidades pessoais */}
        <div className="qualidades">
          <img src={tituloqualidade} alt="tituloqualidade" className="tituloqualidade" />
          <ul>
            <li>Proativa em trabalhos em grupo.</li>
            <li>Criativa em soluções de problemas.</li>
            <li>Excelente, esforçada, em busca de <br /> constante melhora.</li>
            <li>Resiliente e flexível.</li>
            <li>Insistente, não desanima diante de desafios.</li>
            <li>Inteligente em relações interpessoais.</li>
            <li>Fiel e confiável.</li>
          </ul>
        </div>

        {/* Bloco de contato (email e localização) */}
        <div className="contato">
          {/* Linha decorativa e título da seção */}
          <img src={linha} alt="linha" className="linha" />
          <img src={titulocontato} alt="titulocontato" className="titulocontato" />

          {/* Email */}
          <img src={imagememail} alt="email" className="email" />
          <p className="textoemail">@isabely.kusmitsch.dev2024@gmail.com</p>

          {/* Localização */}
          <img src={imagemlocalizacao} alt="localizacao" className="localizacao" />
          <p className="textolocalizacao">Sorocaba/SP</p>
        </div>

        {/* Bloco com fotos das turmas de diferentes anos */}
        <div className="fotoTurma">
          <img src={quintoano} alt="quintoano" className="quintoano" />
          <img src={nonoano} alt="nonoano" className="nonoano" />
          <img src={terceiroano} alt="terceiroano" className="terceiroano" />
        </div>

      </div>
    </section>
  );
};

export default Educacao;
