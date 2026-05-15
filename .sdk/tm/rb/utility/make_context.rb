# BaconIpsum SDK utility: make_context
require_relative '../core/context'
module BaconIpsumUtilities
  MakeContext = ->(ctxmap, basectx) {
    BaconIpsumContext.new(ctxmap, basectx)
  }
end
