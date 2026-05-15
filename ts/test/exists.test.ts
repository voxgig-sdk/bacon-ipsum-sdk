
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BaconIpsumSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BaconIpsumSDK.test()
    equal(null !== testsdk, true)
  })

})
