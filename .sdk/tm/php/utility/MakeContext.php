<?php
declare(strict_types=1);

// BaconIpsum SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BaconIpsumMakeContext
{
    public static function call(array $ctxmap, ?BaconIpsumContext $basectx): BaconIpsumContext
    {
        return new BaconIpsumContext($ctxmap, $basectx);
    }
}
