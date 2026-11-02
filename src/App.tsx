import { useState, type SubmitEvent } from 'react'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page">
      <form
        className="create-form"
        aria-labelledby="form-title"
        onSubmit={handleSubmit}
        onChange={() => setSubmitted(false)}
      >
        <h1 id="form-title">Crear registro</h1>

        <div className="field">
          <label htmlFor="name" lang="en">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            pattern=".*\S.*"
            title="Escribe un nombre que no contenga solo espacios."
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email" lang="en">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@ejemplo.com"
            required
          />
        </div>

        <button type="submit">Crear</button>
        <p className="form-status" role="status">
          {submitted ? 'Formulario enviado. Los datos no se guardan en esta demo.' : ''}
        </p>
      </form>
    </main>
  )
}

export default App
