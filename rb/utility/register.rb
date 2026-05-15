# BaconIpsum SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BaconIpsumUtility.registrar = ->(u) {
  u.clean = BaconIpsumUtilities::Clean
  u.done = BaconIpsumUtilities::Done
  u.make_error = BaconIpsumUtilities::MakeError
  u.feature_add = BaconIpsumUtilities::FeatureAdd
  u.feature_hook = BaconIpsumUtilities::FeatureHook
  u.feature_init = BaconIpsumUtilities::FeatureInit
  u.fetcher = BaconIpsumUtilities::Fetcher
  u.make_fetch_def = BaconIpsumUtilities::MakeFetchDef
  u.make_context = BaconIpsumUtilities::MakeContext
  u.make_options = BaconIpsumUtilities::MakeOptions
  u.make_request = BaconIpsumUtilities::MakeRequest
  u.make_response = BaconIpsumUtilities::MakeResponse
  u.make_result = BaconIpsumUtilities::MakeResult
  u.make_point = BaconIpsumUtilities::MakePoint
  u.make_spec = BaconIpsumUtilities::MakeSpec
  u.make_url = BaconIpsumUtilities::MakeUrl
  u.param = BaconIpsumUtilities::Param
  u.prepare_auth = BaconIpsumUtilities::PrepareAuth
  u.prepare_body = BaconIpsumUtilities::PrepareBody
  u.prepare_headers = BaconIpsumUtilities::PrepareHeaders
  u.prepare_method = BaconIpsumUtilities::PrepareMethod
  u.prepare_params = BaconIpsumUtilities::PrepareParams
  u.prepare_path = BaconIpsumUtilities::PreparePath
  u.prepare_query = BaconIpsumUtilities::PrepareQuery
  u.result_basic = BaconIpsumUtilities::ResultBasic
  u.result_body = BaconIpsumUtilities::ResultBody
  u.result_headers = BaconIpsumUtilities::ResultHeaders
  u.transform_request = BaconIpsumUtilities::TransformRequest
  u.transform_response = BaconIpsumUtilities::TransformResponse
}
