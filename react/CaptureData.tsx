import React, { FormEvent, useState } from 'react'

import api from './service/api'

/* interface CaptureDateProps {
  email: string;
  name: string;
  fone: string;
} */

const CaptureData: StorefrontFunctionComponent = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [fone, setFone] = useState('')


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    await api.post('/lead', {
      id: email,
      name,
      fone,
    })

    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label htmlFor="name">
          Nome Completo:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label htmlFor="fone">
          Telefone
          <input
            name="fone"
            type="text"
            value={fone}
            onChange={(event) => setFone(event.target.value)}
          />
        </label>

        <button>Enviar</button>
      </form>
    </div>
  )
}

export default CaptureData
