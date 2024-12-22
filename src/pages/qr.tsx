import QRCode from 'qrcode.react';

export default function QRGenerator() {
  const qrValue = "https://tudominio.com/trago-random";

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🎄 Generá tu QR</h1>
      <QRCode value={qrValue} size={256} />
      <p>Escaneá este QR para empezar la diversión. 🍹</p>
    </div>
  );
}
