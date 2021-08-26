import React, { FormEvent, useState } from 'react';
import axios from 'axios';

/* interface CaptureDateProps {
  email: string;
  name: string;
  fone: string;
} */

const CaptureData: StorefrontFunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [fone, setFone] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(`
      Email: ${email}
      Name: ${name}
      Fone: ${fone}
    `)

    await axios.post('https://fk631h1q1j.execute-api.sa-east-1.amazonaws.com/dev/create',
      {
        name,
        email,
        fone
      })
    event.preventDefault();
  }
  async function handleClientDetail() {
    const response = await fetch('https://stevanato--hiringcoders202105.myvtex.com/api/vtexid/pub/authenticated/user')
    const userLogged = await response.json();
    console.log(userLogged)
  }

  return (
    <div>
      <button type="button" onChange={handleClientDetail}>Obter dados</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input name="email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>

        <label htmlFor="name">
          Nome Completo:
          <input name="name" type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>

        <label htmlFor="fone">
          Telefone
          <input name="fone" type="text" value={fone} onChange={event => setFone(event.target.value)} />
        </label>

        <button>Enviar</button>
      </form>
    </div>
  )
}

export default CaptureData
