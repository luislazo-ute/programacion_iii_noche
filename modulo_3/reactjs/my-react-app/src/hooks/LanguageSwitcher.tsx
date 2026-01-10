import { useState } from 'react';

// 1. Definimos el tipo corto arriba
type Language = 'es' | 'en' | 'fr';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<Language>('es');

  const messages = {
    es: 'Hola mundo',
    en: 'Hello world',
    fr: 'Bonjour le monde'
  };

  return (
    <div>
      <select 
        value={lang} 
        // 2. Aquí está la magia: "as Language" lo arregla todo en una línea
        onChange={(e) => setLang(e.target.value as Language)}
      >
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
      </select>
      
      <p>{messages[lang]}</p>
    </div>
  );
}