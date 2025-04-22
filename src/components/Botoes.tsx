
import React, {useRef} from 'react';
import som1 from '../assets/among-us-role-reveal-sound.mp3'
import som2 from '../assets/me-mata-de-uma-vez.mp3'
import som3 from '../assets/run-vine-sound-effect.mp3'
import som4 from '../assets/snore-mimimimimimi.mp3'
import som5 from '../assets/spiderman-meme-song.mp3'
import som6 from '../assets/tf_nemesis.mp3'


const Botoes = () => {

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const tocarSom = (audioSrc: string ) => {
        if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        const novoAudio = new Audio(audioSrc);
        audioRef.current = novoAudio;
        novoAudio.play();
    }

   const pararSom = () => {
    if (audioRef.current){
        audioRef.current.pause();
        audioRef.current.currentTime =0;
    }
   }
   return(
    
   <div style={{ display: "flex",
    flexWrap:'wrap',
    gap:'10px',
    padding:'20px'
   }}>
    <button onClick={() => tocarSom(som1)} style={estiloBotao('#e7a396')}>Among US</button>
    <button onClick={() => tocarSom(som5)}style={estiloBotao('#eace84')} >Spider-Man</button>
    <button onClick={() => tocarSom(som2)}style={estiloBotao('#bab9e1')}>Me Mata</button>
    <button onClick={() => tocarSom(som3)}style={estiloBotao('#d9a1c0')}>Corra</button>
    <button onClick={() => tocarSom(som4)}style={estiloBotao('#b0e3cd')}>MI MI MI</button>
    <button onClick={() => tocarSom(som6)}style={estiloBotao('#f8e5eb')}>Sei La</button>
    <button onClick={() => pararSom()} style={estiloBotao('#f7a91b')}>Para</button>
   </div>

   );
}

const estiloBotao = (cor: string): React.CSSProperties => ({
    backgroundColor: cor,
    color: "white",
    border: "none",
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    fontSize: '12px',
   textAlign:'center',
   padding: '10px',
    })
export default Botoes;