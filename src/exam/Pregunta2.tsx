import { useEffect, useState } from 'react'
// TODO: cuando implementes useMemo, agrégalo al import de arriba

/*
 * PREGUNTA 2 — Conversor de temperatura | ~15 minutos
 * Hooks a usar: useState, useMemo, useEffect
 *
 * La app debe:
 *   - Permitir ingresar una temperatura en Celsius
 *   - Seleccionar la unidad de destino: Fahrenheit o Kelvin
 *   - Mostrar el resultado de la conversión
 *   - Calcular la conversión con useMemo para no recalcularla innecesariamente
 *   - Actualizar el título de la pestaña (document.title) cada vez que cambie el resultado
 *
 * Fórmulas:
 *   Celsius → Fahrenheit : (C × 9/5) + 32
 *   Celsius → Kelvin     : C + 273.15
 */

type Unidad = 'F' | 'K'

export default function Pregunta2() {
  const [celsius, setCelsius] = useState(0)
  const [unidad, setUnidad] = useState<Unidad>('F')

  // TODO 1: Reemplaza esta asignación con useMemo.
  //         Calcula el resultado según la unidad seleccionada.
  //         Define el array de dependencias: ¿cuándo debe recalcularse?
  const resultado = unidad === 'F'
    ? (celsius * 9) / 5 + 32
    : celsius + 273.15

  // TODO 2: Implementa el cuerpo de este useEffect para actualizar document.title.
  //         Formato sugerido: `${celsius}°C = ${resultado.toFixed(2)}°${unidad}`
  useEffect(() => {
    // escribe aquí
  }, [])

  return (
    <div style={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
      <h2>Pregunta 2 — Conversor de temperatura</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <label>
          Temperatura en Celsius
          <input
            type="number"
            value={celsius}
            onChange={e => setCelsius(Number(e.target.value))}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
        <label>
          Convertir a
          <select
            value={unidad}
            onChange={e => setUnidad(e.target.value as Unidad)}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          >
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </label>
        <p style={{ fontSize: '1.5rem', textAlign: 'center', fontFamily: 'monospace' }}>
          {celsius}°C = {resultado.toFixed(2)}°{unidad}
        </p>
      </div>
    </div>
  )
}
