# BaconIpsum SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module BaconIpsumFeatures
  def self.make_feature(name)
    case name
    when "base"
      BaconIpsumBaseFeature.new
    when "ratelimit"
      BaconIpsumRatelimitFeature.new
    when "retry"
      BaconIpsumRetryFeature.new
    when "test"
      BaconIpsumTestFeature.new
    when "timeout"
      BaconIpsumTimeoutFeature.new
    else
      BaconIpsumBaseFeature.new
    end
  end
end
