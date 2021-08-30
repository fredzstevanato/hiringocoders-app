import React, { useEffect, useState } from 'react'
import api from './service/api'
import { Layout, PageBlock } from 'vtex.styleguide'

interface LeadProps {
  ID: string
  name: string
  type: string
  fone: string
}

const ListAllLeads: StorefrontFunctionComponent = () => {
  const [leads, setLeads] = useState<LeadProps[]>()

  useEffect(() => {
    async function getLeads() {
      const all = await api.get('/lead').then((response) => response.data.body) as LeadProps[]
      setLeads(all)
    }
    getLeads()
  }, [])

  return (
    <Layout>
      <PageBlock
        title="List"
        subtitle="Tesando"
        variation="full"
      >
        {leads?.map((item) => {
          return (
            <>
              <h1 key={item.ID}>{item.ID}</h1>
              <h2>Email: {item.ID}</h2>
              <h2>{item.name}</h2>
              <h2>{item.fone}</h2>
              <h2>{item.type}</h2>
            </>
          )
        })}
      </PageBlock>
    </Layout>
  )
}

export default ListAllLeads
