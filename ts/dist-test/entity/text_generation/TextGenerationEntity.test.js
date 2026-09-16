"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TextGenerationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BACON_IPSUM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BACON_IPSUM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaconIpsumSDK.test();
        const ent = testsdk.TextGeneration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BACON_IPSUM_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'text_generation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "text_generation", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "callback", "orig": "callback", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": 5, "kind": "query", "name": "para", "orig": "para", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "sentence", "orig": "sentence", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "example": 0, "kind": "query", "name": "start_with_lorem", "orig": "start_with_lorem", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "example": "meat-and-filler", "kind": "query", "name": "type", "orig": "type", "reqd": false, "type": "`$STRING`", "index$": 5 }] }, "contract": { "id": "GET /api/", "json": "{\"operationId\":\"generateBaconIpsum\",\"parameters\":[{\"description\":\"Type of text generation: 'all-meat' for meat only or 'meat-and-filler' for meat mixed with miscellaneous lorem ipsum filler\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"default\":\"meat-and-filler\",\"enum\":[\"all-meat\",\"meat-and-filler\"],\"type\":\"string\"}},{\"description\":\"Number of paragraphs to generate\",\"in\":\"query\",\"name\":\"paras\",\"required\":false,\"schema\":{\"default\":5,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of sentences to generate (this overrides the paras parameter)\",\"in\":\"query\",\"name\":\"sentences\",\"required\":false,\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Pass 1 to start the first paragraph with 'Bacon ipsum dolor sit amet'\",\"in\":\"query\",\"name\":\"start-with-lorem\",\"required\":false,\"schema\":{\"default\":0,\"enum\":[0,1],\"type\":\"integer\"}},{\"description\":\"Output format for the generated text\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"text\",\"html\"],\"type\":\"string\"}},{\"description\":\"JSONP callback function name\",\"in\":\"query\",\"name\":\"callback\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"jsonFormat\":{\"summary\":\"JSON format response\",\"value\":[\"Bacon ipsum dolor sit amet tenderloin ham hock beef ribs, pork chop shoulder strip steak turducken spare ribs tail tri-tip.\",\"Shankle biltong chicken pancetta, spare ribs pork belly drumstick ham hock ground round short ribs sausage.\",\"Bresaola andouille pork loin fatback, chuck short loin tri-tip ham hock venison beef hamburger pork chop.\"]},\"meatAndFiller\":{\"summary\":\"Meat and filler type\",\"value\":[\"Bacon ipsum dolor sit amet beef ribs chuck turkey, prosciutto ham hock venison lorem dolor.\",\"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"]}},\"schema\":{\"oneOf\":[{\"description\":\"Array of paragraphs when format is 'json'\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},{\"description\":\"Plain text string when format is 'text' or 'html'\",\"type\":\"string\"}]}},\"text/html\":{\"example\":\"<p>Bacon ipsum dolor sit amet tenderloin ham hock beef ribs, pork chop shoulder strip steak turducken spare ribs tail tri-tip.</p><p>Shankle biltong chicken pancetta, spare ribs pork belly drumstick ham hock ground round short ribs sausage.</p>\",\"schema\":{\"type\":\"string\"}},\"text/plain\":{\"example\":\"Bacon ipsum dolor sit amet tenderloin ham hock beef ribs, pork chop shoulder strip steak turducken spare ribs tail tri-tip.\\n\\nShankle biltong chicken pancetta, spare ribs pork belly drumstick ham hock ground round short ribs sausage.\",\"schema\":{\"type\":\"string\"}}},\"description\":\"Successfully generated bacon ipsum text\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters provided\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/", "segments": [{ "lit": "api" }], "select": { "exist": ["callback", "format", "para", "sentence", "start_with_lorem", "type"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "text_generation", "name__orig": "text_generation", "Name": "TextGeneration", "name_": "text_generation", "name-": "text-generation", "NAME": "TEXT_GENERATION", "index$": 0 }, { "active": true, "entity": "text_generation", "key$": "BasicTextGenerationFlow", "kind": "basic", "name": "BasicTextGenerationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "text_generation_ref01", "srcdatavar": "text_generation_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-text_generation_ref01" } }], "index$": 0 }] }, 'TextGeneration');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let text_generation_ref01_data = Object.values(setup.data.existing.text_generation)[0];
        // LOAD
        const text_generation_ref01_ent = client.TextGeneration();
        const text_generation_ref01_match_dt0 = {};
        const text_generation_ref01_data_dt0 = (await text_generation_ref01_ent.load(text_generation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != text_generation_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/text_generation/TextGenerationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaconIpsumSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['text_generation01', 'text_generation02', 'text_generation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BACON_IPSUM_TEST_TEXT_GENERATION_ENTID': idmap,
        'BACON_IPSUM_TEST_LIVE': 'FALSE',
        'BACON_IPSUM_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['BACON_IPSUM_TEST_TEXT_GENERATION_ENTID'];
    const live = 'TRUE' === env.BACON_IPSUM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BACON_IPSUM_TEST_TEXT_GENERATION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BaconIpsumSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.BACON_IPSUM_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TextGenerationEntity.test.js.map