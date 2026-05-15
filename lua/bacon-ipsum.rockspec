package = "voxgig-sdk-bacon-ipsum"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/bacon-ipsum-sdk.git"
}
description = {
  summary = "BaconIpsum SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["bacon-ipsum_sdk"] = "bacon-ipsum_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
