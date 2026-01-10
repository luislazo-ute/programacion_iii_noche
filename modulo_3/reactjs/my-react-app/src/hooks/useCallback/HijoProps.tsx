import { useState, useCallback } from 'react';

interface HijoProps {
  onClick: () => void;
}

const Hijo: React.FC<HijoProps> = ({ onClick }) => {
  console.log('Render Hijo');
  return (
    <button onClick={onClick}>
      Click hijo
    </button>
  );
};

const Padre: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback((): void => {
    alert('Hola desde el hijo');
  }, []);

  return (
    <>
      <p>Contador: {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Incrementar
      </button>

      <Hijo onClick={handleClick} />
    </>
  );
};

export default Padre;
