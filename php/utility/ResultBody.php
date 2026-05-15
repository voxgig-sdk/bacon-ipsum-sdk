<?php
declare(strict_types=1);

// BaconIpsum SDK utility: result_body

class BaconIpsumResultBody
{
    public static function call(BaconIpsumContext $ctx): ?BaconIpsumResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
