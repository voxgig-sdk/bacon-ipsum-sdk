<?php
declare(strict_types=1);

// BaconIpsum SDK utility: feature_add

class BaconIpsumFeatureAdd
{
    public static function call(BaconIpsumContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
