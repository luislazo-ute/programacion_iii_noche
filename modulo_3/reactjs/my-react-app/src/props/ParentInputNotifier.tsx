import { useState } from "react";
import InputNotifier from "./InputNotifier";

export default function ParentInputNotifier() {
  // TypeScript infiere que 'text' es string y 'setText' espera un string
  // gracias al valor inicial ""
  const [text, setText] = useState("");

  return (
    <>
      {/* 'setText' es compatible con la firma (text: string) => void 
        que definimos antes en InputNotifier
      */}
      <InputNotifier onChangeText={setText} />
      <p>Texto: {text}</p>
    </>
  );
}