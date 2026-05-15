# BaconIpsum SDK utility: feature_add
module BaconIpsumUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
