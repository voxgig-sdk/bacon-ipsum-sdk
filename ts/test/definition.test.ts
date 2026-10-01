import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "text_generation",
    "accessor": "TextGeneration",
    "op": "load",
    "method": "GET",
    "path": "/api/",
    "args": [],
    "select": {
      "callback": "v1",
      "format": "v1",
      "para": "v1",
      "sentence": "v1",
      "start_with_lorem": "v1",
      "type": "v1"
    },
    "headers": [],
    "query": [
      "type",
      "paras",
      "sentences",
      "start-with-lorem",
      "format",
      "callback"
    ],
    "auth": null,
    "status": 200,
    "sample": [
      "Bacon ipsum dolor sit amet tenderloin ham hock beef ribs, pork chop shoulder strip steak turducken spare ribs tail tri-tip.",
      "Shankle biltong chicken pancetta, spare ribs pork belly drumstick ham hock ground round short ribs sausage.",
      "Bresaola andouille pork loin fatback, chuck short loin tri-tip ham hock venison beef hamburger pork chop."
    ],
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
