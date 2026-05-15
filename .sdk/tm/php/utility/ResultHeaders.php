<?php
declare(strict_types=1);

// BaconIpsum SDK utility: result_headers

class BaconIpsumResultHeaders
{
    public static function call(BaconIpsumContext $ctx): ?BaconIpsumResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
