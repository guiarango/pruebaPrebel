import { useState } from 'react'
import Pregunta1 from './Pregunta1'
import Pregunta2 from './Pregunta2'

export default function ExamenApp() {
  const [activa, setActiva] = useState<1 | 2>(1)

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <nav style={{
        padding: '1rem 2rem',
        borderBottom: '2px solid #e5e7eb',
        display: 'flex',
        gap: '1rem',
        background: '#f9fafb',
      }}>
        <span style={{ fontWeight: 'bold', marginRight: '1rem' }}>Examen React Hooks</span>
        {([1, 2] as const).map(n => (
          <button
            key={n}
            onClick={() => setActiva(n)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: activa === n ? '#1d4ed8' : '#fff',
              color: activa === n ? '#fff' : '#374151',
              cursor: 'pointer',
              fontWeight: activa === n ? 'bold' : 'normal',
            }}
          >
            Pregunta {n}
          </button>
        ))}
      </nav>
      {activa === 1 && <Pregunta1 />}
      {activa === 2 && <Pregunta2 />}
    </div>
  )
}
