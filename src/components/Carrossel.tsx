// Importa o React e o hook useState para controlar o estado das imagens
import { useState } from 'react';

// Importa os ícones de seta da biblioteca lucide-react
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importa a imagem do título
import FotosMinhas from '../assets/tituloCarrossel.png';

// Importa as imagens do carrossel
import Carrossel1 from '../assets/carrossel1.png';
import Carrossel2 from '../assets/carrossel2.png';
import Carrossel3 from '../assets/carrossel3.png';
import Carrossel4 from '../assets/carrossel4.png';
import Carrossel5 from '../assets/carrossel5.png';
import Carrossel6 from '../assets/carrossel6.png';
import Carrossel7 from '../assets/carrossel7.png';

// Importa o arquivo de estilo (CSS)
import './carrossel.css';

// Lista com todas as imagens que vão aparecer no carrossel
const images = [
  Carrossel1,
  Carrossel2,
  Carrossel3,
  Carrossel4,
  Carrossel5,
  Carrossel6,
  Carrossel7,
];

// Componente do carrossel
const Carrossel = () => {
  // Estado que guarda qual imagem está sendo mostrada no momento
  const [currentIndex, setCurrentIndex] = useState(0);

  // Vai para a imagem anterior no carrossel
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Vai para a próxima imagem no carrossel
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id='carrossel' className="carousel-container">
      {/* Título do carrossel */}
      <img src={FotosMinhas} alt="tituloCarrossel" className="tituloCarrossel" />

      {/* Área do carrossel com setas e imagem */}
      <div className="carousel">
        {/* Botão da seta para a esquerda */}
        <button onClick={prevImage} className="nav-button">
          <ChevronLeft size={32} />
        </button>

        {/* Imagem atual do carrossel */}
        <div className="image-wrapper">
          <img src={images[currentIndex]} alt={`Foto ${currentIndex + 1}`} className="carousel-image" />
        </div>

        {/* Botão da seta para a direita */}
        <button onClick={nextImage} className="nav-button">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outras partes do site
export default Carrossel;
