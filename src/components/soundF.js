import useSound from 'use-sound';

const SoundF = () => {
  
     const [play, { stop }] = useSound(SoundF);
      
        return (
            <div>
          <button onClick={() => play()} className="sound-button" >
          <span role="img" aria-label="play"> ▶️ </span> Play
          </button>

          <button onClick={() => stop()} className="sound-button" >
          <span role="img" aria-label="pause"> ⏸️ </span> Pause
        </button>
        </div>
        );
      };


export default SoundF;

