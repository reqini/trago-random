import { useState } from 'react';

// Importar el JSON con los tragos reales
import cocktailsData from '../data/ingredients.json';

// Interfaz del trago
interface Ingredient {
  name: string;
  quantity: string;
}

interface Cocktail {
  name: string;
  ingredients: Ingredient[];
}

export default function Home() {
  const [result, setResult] = useState<Cocktail | null>(null);

  // Función para seleccionar un trago aleatorio del JSON
  const getRandomTrago = () => {
    if (!cocktailsData || !cocktailsData.cocktails) {
      console.error('El JSON de tragos no está cargado correctamente.');
      return;
    }

    // Seleccionar un trago aleatorio
    const randomCocktail = cocktailsData.cocktails[
      Math.floor(Math.random() * cocktailsData.cocktails.length)
    ];

    // Guardar el resultado en el estado
    setResult(randomCocktail);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#FF4500' }}>🎄 Trago Random 🍹</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        ¡Presioná el botón para descubrir un trago real y delicioso!
      </p>
      {/* Botón para generar un trago random */}
      <button
        onClick={getRandomTrago}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.5rem',
          backgroundColor: '#FF4500',
          color: '#FFF',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          marginBottom: '2rem',
        }}
      >
        🍸 Generar Trago
      </button>

      {/* Mostrar el resultado si hay un trago seleccionado */}
      {result && (
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            border: '2px solid #FF4500',
            borderRadius: '10px',
            backgroundColor: '#FFF8DC',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: '#FF4500' }}>🍸 {result.name}</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {result.ingredients.map((item, index) => (
              <li
                key={index}
                style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}
              >
                {item.name} - {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
