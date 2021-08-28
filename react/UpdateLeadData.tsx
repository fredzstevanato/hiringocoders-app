import React, { useEffect, useState } from 'react'
import api from './service/api'

interface LeadProps {
  name: string
  email: string
  type: string
  fone: string
}

interface Leads {
  ID: string
  lead: LeadProps[]
}

const UpdateLeadData: StorefrontFunctionComponent = () => {
  const [email, setEmail] = useState('');
  //const [leads, setLeads] = useState<LeadProps[]>()

  useEffect(() => {
    async function getUrl() {
      const response = await api.get(`https://stevanato--hiringcoders202105.myvtex.com/api/vtexid/pub/authenticated/user`)

      getUrl()

      if (response.data.user) {
        setEmail(response.data.user)
        return
      }
    }


    console.log(email)

  }, [])
  return <h1>{email ? { email } : 'Email não capturadado'}</h1>
}

export default UpdateLeadData
