import React, { useEffect, useState } from "react";
import api from './service/api'

interface LeadsProps {
  name: string;
  email: string;
  fone: string;
}

const ObterData: StorefrontFunctionComponent = () => {
  const [leads, setLeads] = useState() as LeadsProps[];

  useEffect(() => {
    getData();
  }, [leads])

  async function getData() {
    const all = await api.get('/lead').then((response) => response.data.body)

    console.log(all)
  }

  return (
    <>

    </>
  )
}

export default ObterData;
