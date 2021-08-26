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

const ObterData: StorefrontFunctionComponent = () => {
  const [leads, setLeads] = useState<LeadProps[]>()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const all = await api.get('/lead').then((response) => response.data.body)

    const parsedLeads = all.map((item: Leads) => item.lead) as LeadProps[]

    setLeads(parsedLeads)
  }

  return (
    <div>
      {leads?.map((item) => {
        return (
          <>
            <h1 key={item.email}>{item.email}</h1>
            <h2>{item.name}</h2>
            <h2>{item.fone}</h2>
            <h2>{item.type}</h2>
          </>
        )
      })}
    </div>
  )
}

export default ObterData
