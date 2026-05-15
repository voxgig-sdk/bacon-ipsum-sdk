<?php
declare(strict_types=1);

// BaconIpsum SDK exists test

require_once __DIR__ . '/../baconipsum_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = BaconIpsumSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
