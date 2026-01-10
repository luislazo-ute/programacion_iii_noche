import { useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const MoverCaja: React.FC = () => {
  // Referencia al div
  const boxRef = useRef<HTMLDivElement | null>(null);

  // Referencia a la posición
  const position = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const mover = (e: KeyboardEvent): void => {
      const paso = 10;

      switch (e.key) {
        case 'ArrowUp':
          position.current.y -= paso;
          break;
        case 'ArrowDown':
          position.current.y += paso;
          break;
        case 'ArrowLeft':
          position.current.x -= paso;
          break;
        case 'ArrowRight':
          position.current.x += paso;
          break;
        default:
          return;
      }

      const box = boxRef.current;
      if (box) {
        box.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }
    };

    window.addEventListener('keydown', mover);

    return () => {
      window.removeEventListener('keydown', mover);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: 'deepskyblue',
        borderRadius: '50%',
        position: 'relative',
        transition: 'transform 0.1s ease',
      }}
    />
  );
};

export default MoverCaja;
