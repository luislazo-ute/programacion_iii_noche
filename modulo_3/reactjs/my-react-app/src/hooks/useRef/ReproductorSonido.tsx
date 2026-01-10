import { useRef, type JSX,} from 'react';

export default function ReproductorSonido(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const reproducir = (): void => {
    audioRef.current?.play();
  };

  return (
    <div>
      <button onClick={reproducir}>🔊 Reproducir sonido</button>
      <audio
        ref={audioRef}
        src="https://soundboardmp3.com/en/?utm_source=chatgpt.com?play=27618"
      />
    </div>
  );
}
