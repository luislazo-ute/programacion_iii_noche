import { useState, useMemo } from 'react';

interface Persona {
  id: number;
  nombre: string;
}

const datos: Persona[] = [
  { id: 1, nombre: 'Carlos' },
  { id: 2, nombre: 'Ana' },
  { id: 3, nombre: 'Beatriz' },
];

const TablaOrdenada: React.FC = () => {
  const [asc, setAsc] = useState<boolean>(true);

  const ordenados = useMemo<Persona[]>(() => {
    console.log('Ordenando...');
    return [...datos].sort((a, b) =>
      asc
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre)
    );
  }, [asc]);

  return (
    <>
      <button onClick={() => setAsc((prev) => !prev)}>
        Orden: {asc ? 'A-Z' : 'Z-A'}
      </button>

      <ul>
        {ordenados.map((d) => (
          <li key={d.id}>{d.nombre}</li>
        ))}
      </ul>
    </>
  );
};

export default TablaOrdenada;
