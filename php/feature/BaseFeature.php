<?php
declare(strict_types=1);

// BaconIpsum SDK base feature

class BaconIpsumBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BaconIpsumContext $ctx, array $options): void {}
    public function PostConstruct(BaconIpsumContext $ctx): void {}
    public function PostConstructEntity(BaconIpsumContext $ctx): void {}
    public function SetData(BaconIpsumContext $ctx): void {}
    public function GetData(BaconIpsumContext $ctx): void {}
    public function GetMatch(BaconIpsumContext $ctx): void {}
    public function SetMatch(BaconIpsumContext $ctx): void {}
    public function PrePoint(BaconIpsumContext $ctx): void {}
    public function PreSpec(BaconIpsumContext $ctx): void {}
    public function PreRequest(BaconIpsumContext $ctx): void {}
    public function PreResponse(BaconIpsumContext $ctx): void {}
    public function PreResult(BaconIpsumContext $ctx): void {}
    public function PreDone(BaconIpsumContext $ctx): void {}
    public function PreUnexpected(BaconIpsumContext $ctx): void {}
}
