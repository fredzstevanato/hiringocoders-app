import React, { useEffect, useState } from 'react'
import api from './service/api'

interface LeadProps {
  name: string
  ID: string
  type: string
  fone: string
}

const UpdateLeadData: StorefrontFunctionComponent = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function getUrl() {
      const response = await api.get(`https://stevanato--hiringcoders202105.myvtex.com/api/vtexid/pub/authenticated/user`)

      if (response.data.user) {
        setEmail(response.data.user)
        return
      }
    }
    getUrl()
    console.log(email)
  }, [email])

  useEffect(() => {
    async function sendEmailAws(email: string) {
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'header1': email
        }
      }
      await api.patch('/leads', headers)

    }
    sendEmailAws(email)
  }, [email])


  return (
    <div>
      <h1>{email || 'Email não capturadado ->'}</h1>
    </div>
  )
}

export default UpdateLeadData
