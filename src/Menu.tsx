import quemSou from '../src/assets/quemSou.png';
import fotoisa  from '../src/assets/foto1.png'
import "./Menu.css";

const Menu = () => {
  return (
    <section className='tela2'>
    <div className="menu">

<img src={quemSou} alt="quemsou" className='quemsou'/>
<img src={fotoisa} alt="minhafoto" className='fotoisa'/>
   
      <p>
        {" "}
        Meu nome é Isabely, tenho 17 anos e estou atualmente no terceiro ano do
        Ensino Médio. Tenho o sonho de estudar no exterior e participar de
        missões, com o desejo de presenciar e compartilhar a manifestação do
        Espírito Santo na vida das pessoas. Sou comunicativa, apaixonada por
        música — dificilmente estou sem meus fones de ouvido — e tenho grande
        interesse por fotografia. Embora esteja no início da minha jornada nessa
        área, busco constantemente evoluir para registrar momentos
        significativos e especiais para as pessoas.
       
      </p>
    </div>
    </section>
  );
};

export default Menu;
