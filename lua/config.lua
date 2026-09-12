-- BaconIpsum SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "BaconIpsum",
      slug = "bacon-ipsum",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://baconipsum.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["text_generation"] = {},
      },
    },
    entity = {
      ["text_generation"] = {
        ["fields"] = {},
        ["name"] = "text_generation",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "callback",
                      ["orig"] = "callback",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 5,
                      ["kind"] = "query",
                      ["name"] = "para",
                      ["orig"] = "para",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sentence",
                      ["orig"] = "sentence",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "start_with_lorem",
                      ["orig"] = "start_with_lorem",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "meat-and-filler",
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "callback",
                    "format",
                    "para",
                    "sentence",
                    "start_with_lorem",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
