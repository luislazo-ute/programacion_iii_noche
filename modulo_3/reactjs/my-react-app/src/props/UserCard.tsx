// 1. Definimos la estructura de los datos del usuario
interface User {
  name: string;
  age: number;
}

// 2. Definimos qué props recibe el componente
interface UserCardProps {
  user: User;
}

// 3. Aplicamos el tipo a las props en la función
export default function UserCard({ user }: UserCardProps) {
  return <div>{user.name} - {user.age} años</div>;
} 

