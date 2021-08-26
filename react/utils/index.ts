import { ColossusContext } from 'colossus'
import axios from 'axios'

/* const vendor = process.env.VTEX_APP_VENDOR
const workspace = process.env.VTEX_WORKSPACE
const region = process.env.VTEX_REGION */

const urlBase = `https://stevanato--hiringcoders202105.myvtex.com/api/vtexid/pub/authenticated/user`

function getCookieFrom(ctx: any) {
  const {
    request: {
      header: { cookie },
    },
    vtex: { authToken },
  } = ctx

  // eslint-disable-next-line no-console
  console.log(ctx)

  return {
    'Proxy-Authorization': authToken,
    'Content-Type': 'application/json',
    Cookie: cookie,
  }
}

export async function getUser(ctx: ColossusContext) {
  const response = await axios(`${urlBase}`, {
    headers: getCookieFrom(ctx),
  })

  return response
}
