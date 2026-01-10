import { useState, useMemo } from 'react';

const nombres: string[] = [
  'Ana',
  'Andrés',
  'Lucía',
  'Carlos',
  'Laura',
  'Luis',
  'Alberto',
];

const FiltroLista: React.FC = () => {
  const [busqueda, setBusqueda] = useState<string>('');

  const filtrados = useMemo<string[]>(
    () =>
      nombres.filter((n) =>
        n.toLowerCase().includes(busqueda.toLowerCase())
      ),
    [busqueda]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBusqueda(e.target.value);
  };

  return (
    <>
      <input
        placeholder="Buscar nombre"
        value={busqueda}
        onChange={handleChange}
      />

      <ul>
        {filtrados.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </>
  );
};

export default FiltroLista;
