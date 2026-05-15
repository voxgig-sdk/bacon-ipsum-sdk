<?php
declare(strict_types=1);

// BaconIpsum SDK utility: prepare_body

class BaconIpsumPrepareBody
{
    public static function call(BaconIpsumContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
