<?php
declare(strict_types=1);

// BaconIpsum SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class BaconIpsumFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new BaconIpsumBaseFeature();
            case "test":
                return new BaconIpsumTestFeature();
            default:
                return new BaconIpsumBaseFeature();
        }
    }
}
