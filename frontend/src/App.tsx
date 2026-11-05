import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Connecting…')
  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/health', { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('API unavailable')
        const data = await response.json()
        setStatus(data.status === 'ok' ? 'Connected' : 'Unavailable')
      })
      .catch((error) => { if (error.name !== 'AbortError') setStatus('Offline — start the backend') })
    return () => controller.abort()
  }, [])

  return (
    <main>
      <span className="eyebrow">INTELLITRACK / DEVELOPMENT</span>
      <h1>A clear view of attendance.</h1>
      <p>Facial recognition attendance and workstation presence monitoring.</p>
      <section aria-label="Project status">
        <h2>Workspace ready</h2>
        <p>Backend connection: <strong role="status">{status}</strong></p>
        <p>No employees enrolled. Camera monitoring is not active.</p>
      </section>
      <section aria-label="Next milestone">
        <h2>First milestone</h2>
        <ol>
          <li>Enroll an employee’s face.</li>
          <li>Recognize the employee and record clock-in.</li>
          <li>Track departure, return, and the one-hour break rule.</li>
        </ol>
      </section>
      <footer>Academic prototype · Presence does not establish work activity.</footer>
    </main>
  )
}

export default App
