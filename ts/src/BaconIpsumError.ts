
import { Context } from './Context'


class BaconIpsumError extends Error {

  isBaconIpsumError = true

  sdk = 'BaconIpsum'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  BaconIpsumError
}

