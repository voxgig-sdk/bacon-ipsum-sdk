-- BaconIpsum SDK error

local json = require("dkjson")

local BaconIpsumError = {}
BaconIpsumError.__index = BaconIpsumError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function BaconIpsumError.new(code, msg, ctx)
  local self = setmetatable({}, BaconIpsumError)
  self.is_sdk_error = true
  self.sdk = "BaconIpsum"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function BaconIpsumError:context()
  return CONTEXT[self]
end


function BaconIpsumError:error()
  return self.msg
end


function BaconIpsumError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function BaconIpsumError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function BaconIpsumError:to_json()
  return json.encode(self:to_table())
end


function BaconIpsumError:__tostring()
  return self.msg
end


function BaconIpsumError.__tojson(self)
  return self:to_json()
end


return BaconIpsumError
