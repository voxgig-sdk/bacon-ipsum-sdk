-- BaconIpsum SDK error

local BaconIpsumError = {}
BaconIpsumError.__index = BaconIpsumError


function BaconIpsumError.new(code, msg, ctx)
  local self = setmetatable({}, BaconIpsumError)
  self.is_sdk_error = true
  self.sdk = "BaconIpsum"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BaconIpsumError:error()
  return self.msg
end


function BaconIpsumError:__tostring()
  return self.msg
end


return BaconIpsumError
