import { useRef } from 'react';

const CirculoColorido: React.FC = () => {
  // Tipamos la referencia al div
  const circuloRef = useRef<HTMLDivElement | null>(null);

  const cambiarColor = (): void => {
    const colores: string[] = [
      'crimson',
      'royalblue',
      'mediumseagreen',
      'orange',
      'violet',
    ];

    const color = colores[Math.floor(Math.random() * colores.length)];

    // Acceso seguro a la referencia
    if (circuloRef.current) {
      circuloRef.current.style.backgroundColor = color;
    }
  };

  return (
    <>
      <div
        ref={circuloRef}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: 'gray',
          marginBottom: '1rem',
          transition: 'background-color 0.5s',
        }}
      />
      <button onClick={cambiarColor}>
        Cambiar color del círculo
      </button>
    </>
  );
};

export default CirculoColorido;
