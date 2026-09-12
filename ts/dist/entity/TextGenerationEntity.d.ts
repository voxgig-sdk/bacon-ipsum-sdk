import { BaconIpsumEntityBase } from '../BaconIpsumEntityBase';
import type { BaconIpsumSDK } from '../BaconIpsumSDK';
import type { Control } from '../types';
import type { TextGeneration, TextGenerationLoadMatch } from '../BaconIpsumTypes';
declare class TextGenerationEntity extends BaconIpsumEntityBase<TextGeneration> {
    constructor(client: BaconIpsumSDK, entopts: any);
    make(this: TextGenerationEntity): TextGenerationEntity;
    load(this: any, reqmatch?: TextGenerationLoadMatch, ctrl?: Control): Promise<TextGenerationEntity>;
}
export { TextGenerationEntity };
