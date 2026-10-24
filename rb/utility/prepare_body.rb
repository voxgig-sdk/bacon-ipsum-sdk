# BaconIpsum SDK utility: prepare_body
require_relative 'media'
module BaconIpsumUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return BaconIpsumUtilities.raw_body(ctx.reqdata) if BaconIpsumUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
