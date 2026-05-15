package voxgigbaconipsumsdk

import (
	"github.com/voxgig-sdk/bacon-ipsum-sdk/core"
	"github.com/voxgig-sdk/bacon-ipsum-sdk/entity"
	"github.com/voxgig-sdk/bacon-ipsum-sdk/feature"
	_ "github.com/voxgig-sdk/bacon-ipsum-sdk/utility"
)

// Type aliases preserve external API.
type BaconIpsumSDK = core.BaconIpsumSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BaconIpsumEntity = core.BaconIpsumEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BaconIpsumError = core.BaconIpsumError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTextGenerationEntityFunc = func(client *core.BaconIpsumSDK, entopts map[string]any) core.BaconIpsumEntity {
		return entity.NewTextGenerationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBaconIpsumSDK = core.NewBaconIpsumSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
