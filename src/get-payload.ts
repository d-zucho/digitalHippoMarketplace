import dotenv from 'dotenv' // allows us to make and use secure variables
import path from 'path'
import payload from 'payload'
import type { InitOptions } from 'payload/config'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  }
}

interface Args {
  initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({ initOptions }: Args) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is missing') //what will be used for auth
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      // ^^ meaning if init options is passed return false
      ...(initOptions || {}),
    })
  }

  try {
    cached.client = await cached.promise
  } catch (err: unknown) {
    cached.promise = null
    throw err
  }
}
