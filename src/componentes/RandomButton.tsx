import { motion } from 'framer-motion';

interface RandomButtonProps {
  onClick: () => void;
}

export default function RandomButton({ onClick }: RandomButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        padding: '1rem 2rem',
        fontSize: '1.5rem',
        backgroundColor: '#FF4500',
        color: '#FFF',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
    >
      🍹 Trago Random
    </motion.button>
  );
}
