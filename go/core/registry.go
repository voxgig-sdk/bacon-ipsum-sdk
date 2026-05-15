package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTextGenerationEntityFunc func(client *BaconIpsumSDK, entopts map[string]any) BaconIpsumEntity

