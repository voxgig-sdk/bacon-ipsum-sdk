# BaconIpsum SDK

Generate meat-themed lorem ipsum filler text as JSON, plain text, or HTML

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Bacon Ipsum API

[Bacon Ipsum](https://baconipsum.com) is a placeholder-text generator created by Pete Nelson that swaps the usual Latin lorem ipsum for a list of meaty words. The [JSON API](https://baconipsum.com/json-api/) wraps the same generator behind a single REST endpoint so any application can request filler copy on demand.

What you get from the API:

- A single `GET https://baconipsum.com/api/` endpoint that returns generated paragraphs.
- A `type` parameter (`all-meat` or `meat-and-filler`) to control the word mix.
- A `paras` parameter for paragraph count, or `sentences` to request a specific sentence count instead.
- A `start-with-lorem=1` flag to begin output with the classic "Bacon ipsum dolor sit amet" opener.
- A `format` parameter (`json`, `text`, or `html`) and a `callback` parameter for JSONP.

The API is publicly reachable without authentication and CORS is enabled, so it can be called directly from browser code. No rate limits or licence terms are published; the underlying generator is also distributed as the open-source [Any Ipsum](https://github.com/petenelson/wp-any-ipsum) WordPress plugin.

## Try it

**TypeScript**
```bash
npm install bacon-ipsum
```

**Python**
```bash
pip install bacon-ipsum-sdk
```

**PHP**
```bash
composer require voxgig/bacon-ipsum-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/bacon-ipsum-sdk/go
```

**Ruby**
```bash
gem install bacon-ipsum-sdk
```

**Lua**
```bash
luarocks install bacon-ipsum-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { BaconIpsumSDK } from 'bacon-ipsum'

const client = new BaconIpsumSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o bacon-ipsum-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "bacon-ipsum": {
      "command": "/abs/path/to/bacon-ipsum-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **TextGeneration** | Generated meat-themed placeholder text returned as a JSON array of paragraphs (or plain text / HTML) from `GET /api/` with parameters like `type`, `paras`, `sentences`, `start-with-lorem`, and `format`. | `/api/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from baconipsum_sdk import BaconIpsumSDK

client = BaconIpsumSDK({})


# Load a specific textgeneration
textgeneration, err = client.TextGeneration(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'baconipsum_sdk.php';

$client = new BaconIpsumSDK([]);


// Load a specific textgeneration
[$textgeneration, $err] = $client->TextGeneration(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/bacon-ipsum-sdk/go"

client := sdk.NewBaconIpsumSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "BaconIpsum_sdk"

client = BaconIpsumSDK.new({})


# Load a specific textgeneration
textgeneration, err = client.TextGeneration(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("bacon-ipsum_sdk")

local client = sdk.new({})


-- Load a specific textgeneration
local textgeneration, err = client:TextGeneration(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = BaconIpsumSDK.test()
const result = await client.TextGeneration().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = BaconIpsumSDK.test(None, None)
result, err = client.TextGeneration(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = BaconIpsumSDK::test(null, null);
[$result, $err] = $client->TextGeneration(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.TextGeneration(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = BaconIpsumSDK.test(nil, nil)
result, err = client.TextGeneration(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:TextGeneration(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Bacon Ipsum API

- Upstream: [https://baconipsum.com](https://baconipsum.com)
- API docs: [https://baconipsum.com/json-api/](https://baconipsum.com/json-api/)

- No explicit licence terms are published on the Bacon Ipsum site or its API docs.
- The service is publicly accessible without an API key or sign-up.
- Attribution is not required, but linking back to [baconipsum.com](https://baconipsum.com) is a friendly courtesy.
- Treat usage as best-effort; no SLA or rate-limit policy is documented.

---

Generated from the Bacon Ipsum API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
