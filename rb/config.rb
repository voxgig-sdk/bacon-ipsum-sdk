# BaconIpsum SDK configuration

module BaconIpsumConfig
  def self.make_config
    {
      "main" => {
        "name" => "BaconIpsum",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://baconipsum.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "text_generation" => {},
        },
      },
      "entity" => {
        "text_generation" => {
          "fields" => [],
          "name" => "text_generation",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 5,
                        "kind" => "query",
                        "name" => "para",
                        "orig" => "para",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "sentence",
                        "orig" => "sentence",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "example" => 0,
                        "kind" => "query",
                        "name" => "start_with_lorem",
                        "orig" => "start_with_lorem",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "example" => "meat-and-filler",
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/",
                  "parts" => [
                    "api",
                  ],
                  "select" => {
                    "exist" => [
                      "callback",
                      "format",
                      "para",
                      "sentence",
                      "start_with_lorem",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    BaconIpsumFeatures.make_feature(name)
  end
end
