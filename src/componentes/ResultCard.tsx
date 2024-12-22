interface ResultCardProps {
  ingredients: { name: string; quantity: string }[];
  name: string;
}

export default function ResultCard({ ingredients, name }: ResultCardProps) {
  return (
    <div style={{
      marginTop: '2rem',
      padding: '1rem',
      border: '2px solid #FF4500',
      borderRadius: '10px',
      backgroundColor: '#FFF8DC',
      textAlign: 'center',
    }}>
      <h2 style={{ color: '#FF4500' }}>🍸 {name}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {ingredients.map((item, index) => (
          <li key={index} style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
