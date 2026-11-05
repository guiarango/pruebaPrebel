import { useEffect, useRef, useState } from 'react'

/*
 * PREGUNTA 1 — Cronómetro | ~15 minutos
 * Hooks a usar: useState, useRef
 *
 * El cronómetro debe:
 *   - Mostrar el tiempo transcurrido en segundos con un decimal (ej. "1.4s")
 *   - Start: inicia el conteo (no hace nada si ya está corriendo)
 *   - Stop:  pausa el conteo sin reiniciarlo
 *   - Reset: vuelve a 0 y detiene el conteo
 *   - No debe haber memory leaks al desmontar el componente
 */
export default function Pregunta1() {
  // ✅ useState ya declarados — entiende para qué sirve cada uno
  const [tiempo, setTiempo] = useState(0)
  const [corriendo, setCorriendo] = useState(false)

  // TODO 1: ¿Por qué usamos useRef para el ID del intervalo en lugar de useState?
  //         Escribe tu respuesta en un comentario debajo.
  // El ID del intervalo no se pinta en pantalla, solo lo necesitamos para poder
  // limpiarlo después. Con useRef el valor se mantiene entre renders y cambiarlo
  // no provoca un re-render. Con useState cada asignación renderizaría de nuevo
  // sin necesidad, y además el valor se actualiza de forma asíncrona, así que
  // un handler podría leer un ID viejo y dejar un intervalo vivo.
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const limpiarIntervalo = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => limpiarIntervalo, [])

  const handleStart = () => {
    if (corriendo || intervalRef.current) return
    // TODO 2: Crea un setInterval que se ejecute cada 100ms.
    //         Dentro del callback, incrementa `tiempo` en 100.
    //         Guarda el ID que devuelve setInterval en intervalRef.current.
    intervalRef.current = setInterval(() => {
      setTiempo(prev => prev + 100)
    }, 100)
    setCorriendo(true)
  }

  const handleStop = () => {
    limpiarIntervalo()
    // TODO 3: Actualiza el estado para reflejar que el cronómetro está detenido.
    setCorriendo(false)
  }

  const handleReset = () => {
    limpiarIntervalo()
    // TODO 4: Reinicia tiempo a 0 y el estado de corriendo.
    setTiempo(0)
    setCorriendo(false)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
      <h2 style={{marginBottom:"30px"}}>Pregunta 1 — Cronómetro</h2>
      <p style={{ fontSize: '3rem', fontFamily: 'monospace', textAlign: 'center',marginBottom:"30px" }}>
        {(tiempo / 1000).toFixed(1)}s
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={handleStart} disabled={corriendo}>Start</button>
        <button onClick={handleStop} disabled={!corriendo}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
