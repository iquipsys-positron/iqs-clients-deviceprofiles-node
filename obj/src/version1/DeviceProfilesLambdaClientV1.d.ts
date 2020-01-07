import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { BaseDeviceProfileV1 } from './BaseDeviceProfileV1';
import { DeviceProfileV1 } from './DeviceProfileV1';
import { IDeviceProfilesClientV1 } from './IDeviceProfilesClientV1';
export declare class DeviceProfilesLambdaClientV1 extends CommandableLambdaClient implements IDeviceProfilesClientV1 {
    constructor(config?: any);
    getBaseProfiles(correlationId: string, callback: (err: any, list: BaseDeviceProfileV1[]) => void): void;
    getProfiles(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void;
    getProfileById(correlationId: string, profileId: string, callback: (err: any, profile: DeviceProfileV1) => void): void;
    createProfile(correlationId: string, profile: DeviceProfileV1, callback: (err: any, profile: DeviceProfileV1) => void): void;
    updateProfile(correlationId: string, profile: DeviceProfileV1, callback: (err: any, profile: DeviceProfileV1) => void): void;
    deleteProfileById(correlationId: string, profileId: string, callback: (err: any, profile: DeviceProfileV1) => void): void;
}
