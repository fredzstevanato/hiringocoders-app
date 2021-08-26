import React, { FormEvent, useState } from 'react'
// import jwtDecode from 'jwt-decode'

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
      name,
      email,
      fone,
    })

    event.preventDefault()
  }

  /*   function getUser() {
    const hash =
      'eyJhbGciOiJFUzI1NiIsImtpZCI6IjI3ODc4Q0VGNUQwNjZGRENGQTdGMTMxMDkwMzY0QjE5MDg2MTcwOEIiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJzdGV2YW5hdG9fZnJlZHpAaG90bWFpbC5jb20iLCJhY2NvdW50IjoiaGlyaW5nY29kZXJzMjAyMTA1IiwiYXVkaWVuY2UiOiJ3ZWJzdG9yZSIsInNlc3MiOiJmZWRiNGMyMy1kNTgzLTRlMTYtOTQ3Mi1iZjZjYzg2ZjJlZGYiLCJleHAiOjE2MzAwOTAyMjMsInVzZXJJZCI6ImY4NzNhMWFhLWJiYjMtNDk4Zi04MjM5LTk0NTU2NmM5Y2FlNCIsImlhdCI6MTYzMDAwMzgyMywiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6ImY3ZmJlMzc0LTkyODktNDU4OC1hMzBiLTM1NGRjMjM5YjM2MSJ9.2Jau4_OcvkfWIm6tcniegUdL_2tSboZPVX9FxMnMQ4IGjtZKesVw-rThSzQjvqQh8TRd5ZrHVXhaasqjLSAnKA'

    // eslint-disable-next-line no-console
    console.log(jwtDecode(hash))
  } */

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
