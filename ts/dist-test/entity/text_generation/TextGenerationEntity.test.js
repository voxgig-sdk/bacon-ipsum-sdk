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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "text_generation", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "callback", "or": "callback", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 5, "k": "query", "n": "para", "or": "para", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "sentence", "or": "sentence", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": 0, "k": "query", "n": "start_with_lorem", "or": "start_with_lorem", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": "meat-and-filler", "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/api/", "q": { "exist": ["callback", "format", "para", "sentence", "start_with_lorem", "type"] }, "r": {}, "s": [{ "lit": "api" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "text_generation", "name__orig": "text_generation", "Name": "TextGeneration", "name_": "text_generation", "name-": "text-generation", "NAME": "TEXT_GENERATION", "index$": 0 }, { "active": true, "entity": "text_generation", "key$": "BasicTextGenerationFlow", "kind": "basic", "name": "BasicTextGenerationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "text_generation_ref01", "srcdatavar": "text_generation_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-text_generation_ref01" } }], "index$": 0 }] }, 'TextGeneration', { "GET /api/": { "protocol": "http", "operationId": "generateBaconIpsum", "responses": { "200": { "description": "Successfully generated bacon ipsum text", "content": { "application/json": { "schema": { "oneOf": [{ "type": "array", "items": { "type": "string" }, "description": "Array of paragraphs when format is 'json'" }, { "type": "string", "description": "Plain text string when format is 'text' or 'html'" }] }, "examples": { "jsonFormat": { "summary": "JSON format response", "value": ["Bacon ipsum dolor sit amet tenderloin ham hock beef ribs, pork chop shoulder strip steak turducken spare ribs tail tri-tip.", "Shankle biltong chicken pancetta, spare ribs pork belly drumstick ham hock ground round short ribs sausage.", "Bresaola andouille pork loin fatback, chuck short loin tri-tip ham hock venison beef hamburger pork chop."] }, "meatAndFiller": { "summary": "Meat and filler type", "value": ["Bacon ipsum dolor sit amet beef ribs chuck turkey, prosciutto ham hock venison lorem dolor.", "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."] } } }, "text/plain": { "schema": { "type": "string" }, "example": "Bacon ipsum dolor sit amet tenderloin ham hock beef ribs, pork chop shoulder strip steak turducken spare ribs tail tri-tip.\n\nShankle biltong chicken pancetta, spare ribs pork belly drumstick ham hock ground round short ribs sausage." }, "text/html": { "schema": { "type": "string" }, "example": "<p>Bacon ipsum dolor sit amet tenderloin ham hock beef ribs, pork chop shoulder strip steak turducken spare ribs tail tri-tip.</p><p>Shankle biltong chicken pancetta, spare ribs pork belly drumstick ham hock ground round short ribs sausage.</p>" } } }, "400": { "description": "Bad request - invalid parameters provided", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string" } } } } } } }, "parameters": [{ "name": "type", "in": "query", "description": "Type of text generation: 'all-meat' for meat only or 'meat-and-filler' for meat mixed with miscellaneous lorem ipsum filler", "required": false, "schema": { "type": "string", "enum": ["all-meat", "meat-and-filler"], "default": "meat-and-filler" }, "index$": 0 }, { "name": "paras", "in": "query", "description": "Number of paragraphs to generate", "required": false, "schema": { "type": "integer", "default": 5, "minimum": 1 }, "index$": 1 }, { "name": "sentences", "in": "query", "description": "Number of sentences to generate (this overrides the paras parameter)", "required": false, "schema": { "type": "integer", "minimum": 1 }, "index$": 2 }, { "name": "start-with-lorem", "in": "query", "description": "Pass 1 to start the first paragraph with 'Bacon ipsum dolor sit amet'", "required": false, "schema": { "type": "integer", "enum": [0, 1], "default": 0 }, "index$": 3 }, { "name": "format", "in": "query", "description": "Output format for the generated text", "required": false, "schema": { "type": "string", "enum": ["json", "text", "html"], "default": "json" }, "index$": 4 }, { "name": "callback", "in": "query", "description": "JSONP callback function name", "required": false, "schema": { "type": "string" }, "index$": 5 }], "securitySource": "unspecified" } });
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