import { TextGenerationEntity } from './entity/TextGenerationEntity';
export type * from './BaconIpsumTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { BaconIpsumEntityBase } from './BaconIpsumEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class BaconIpsumSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    TextGeneration(entopts?: Record<string, any>): TextGenerationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): BaconIpsumSDK;
    tester(testopts?: any, sdkopts?: any): BaconIpsumSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof BaconIpsumSDK;
export { stdutil, config, BaseFeature, BaconIpsumEntityBase, BaconIpsumSDK, SDK, };
export type { DirectResult };
