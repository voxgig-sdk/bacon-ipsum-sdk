# BaconIpsum SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module BaconIpsumFeatures
  def self.make_feature(name)
    case name
    when "base"
      BaconIpsumBaseFeature.new
    when "test"
      BaconIpsumTestFeature.new
    else
      BaconIpsumBaseFeature.new
    end
  end
end
