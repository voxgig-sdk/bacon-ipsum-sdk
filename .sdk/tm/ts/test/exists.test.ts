
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BaconIpsumSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BaconIpsumSDK.test()
    equal(testsdk instanceof BaconIpsumSDK, true,
      'BaconIpsumSDK.test() must return a client synchronously')
  })

})
