
export default function Greeting(props: { name: string, lastname: string }) {
  return <h2>Hola, {props.name} {props.lastname}</h2>;
}
