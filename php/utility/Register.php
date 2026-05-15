<?php
declare(strict_types=1);

// BaconIpsum SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

BaconIpsumUtility::setRegistrar(function (BaconIpsumUtility $u): void {
    $u->clean = [BaconIpsumClean::class, 'call'];
    $u->done = [BaconIpsumDone::class, 'call'];
    $u->make_error = [BaconIpsumMakeError::class, 'call'];
    $u->feature_add = [BaconIpsumFeatureAdd::class, 'call'];
    $u->feature_hook = [BaconIpsumFeatureHook::class, 'call'];
    $u->feature_init = [BaconIpsumFeatureInit::class, 'call'];
    $u->fetcher = [BaconIpsumFetcher::class, 'call'];
    $u->make_fetch_def = [BaconIpsumMakeFetchDef::class, 'call'];
    $u->make_context = [BaconIpsumMakeContext::class, 'call'];
    $u->make_options = [BaconIpsumMakeOptions::class, 'call'];
    $u->make_request = [BaconIpsumMakeRequest::class, 'call'];
    $u->make_response = [BaconIpsumMakeResponse::class, 'call'];
    $u->make_result = [BaconIpsumMakeResult::class, 'call'];
    $u->make_point = [BaconIpsumMakePoint::class, 'call'];
    $u->make_spec = [BaconIpsumMakeSpec::class, 'call'];
    $u->make_url = [BaconIpsumMakeUrl::class, 'call'];
    $u->param = [BaconIpsumParam::class, 'call'];
    $u->prepare_auth = [BaconIpsumPrepareAuth::class, 'call'];
    $u->prepare_body = [BaconIpsumPrepareBody::class, 'call'];
    $u->prepare_headers = [BaconIpsumPrepareHeaders::class, 'call'];
    $u->prepare_method = [BaconIpsumPrepareMethod::class, 'call'];
    $u->prepare_params = [BaconIpsumPrepareParams::class, 'call'];
    $u->prepare_path = [BaconIpsumPreparePath::class, 'call'];
    $u->prepare_query = [BaconIpsumPrepareQuery::class, 'call'];
    $u->result_basic = [BaconIpsumResultBasic::class, 'call'];
    $u->result_body = [BaconIpsumResultBody::class, 'call'];
    $u->result_headers = [BaconIpsumResultHeaders::class, 'call'];
    $u->transform_request = [BaconIpsumTransformRequest::class, 'call'];
    $u->transform_response = [BaconIpsumTransformResponse::class, 'call'];
});
