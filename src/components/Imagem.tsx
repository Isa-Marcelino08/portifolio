type ImageProps ={
    width: number;
    height: number;
};



const Imagem = ({width, height}: ImageProps) => {
    const url = `https://picsum.photos/${width}/${height}`;
    return <img src={url} alt="Imagem aleatoria"/>
};

export default Imagem;