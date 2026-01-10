import { useEffect, useRef } from 'react';

const FocoAutomatico: React.FC = () => {
  // Tipamos la referencia al input HTML
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Al montar el componente, enfocamos el input
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <label>Nombre: </label>
      <input
        placeholder="Escribe tu nombre aquí..."
      />
      <label>Apellido: </label>
      <input
        ref={inputRef}
        placeholder="Escribe tu apellido aquí..."
      />
    </div>
  );
};

export default FocoAutomatico;
