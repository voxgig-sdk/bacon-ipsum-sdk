# BaconIpsum SDK configuration

module BaconIpsumConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 5,
                        "kind" => "query",
                        "name" => "para",
                        "orig" => "para",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sentence",
                        "orig" => "sentence",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "start_with_lorem",
                        "orig" => "start_with_lorem",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "meat-and-filler",
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
