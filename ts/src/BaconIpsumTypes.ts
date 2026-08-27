// Typed models for the BaconIpsum SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface TextGeneration {
}

export interface TextGenerationLoadMatch {
  callback?: string
  format?: string
  para?: number
  sentence?: number
  start_with_lorem?: number
  type?: string
}

