"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "text_generation",
        "accessor": "TextGeneration",
        "op": "load",
        "method": "GET",
        "path": "/api/",
        "args": [],
        "select": {
            "callback": "v1",
            "format": "json",
            "para": 5,
            "sentence": "v1",
            "start_with_lorem": 0,
            "type": "meat-and-filler"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json",
            "text/plain",
            "text/html"
        ],
        "query": [
            "type",
            "paras",
            "sentences",
            "start-with-lorem",
            "format",
            "callback"
        ],
        "queryArgs": [
            {
                "name": "callback",
                "wire": "callback"
            },
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "para",
                "wire": "paras"
            },
            {
                "name": "sentence",
                "wire": "sentences"
            },
            {
                "name": "start_with_lorem",
                "wire": "start-with-lorem"
            },
            {
                "name": "type",
                "wire": "type"
            }
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
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map