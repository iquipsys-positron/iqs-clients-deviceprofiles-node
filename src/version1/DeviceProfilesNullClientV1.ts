import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IDeviceProfilesClientV1 } from './IDeviceProfilesClientV1';
import { BaseDeviceProfileV1 } from './BaseDeviceProfileV1';
import { DeviceProfileV1 } from './DeviceProfileV1';

export class DeviceProfilesNullClientV1 implements IDeviceProfilesClientV1 {
            
    public getBaseProfiles(correlationId: string, 
        callback: (err: any, list: BaseDeviceProfileV1[]) => void): void {
        callback(null, []);
    }

    public getProfiles(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void {
        callback(null, new DataPage<DeviceProfileV1>([], 0));
    }

    public getProfileById(correlationId: string, profileId: string, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        callback(null, null);
    }

    public createProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        callback(null, profile);
    }

    public updateProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        callback(null, profile);
    }

    public deleteProfileById(correlationId: string, profileId: string,
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        if (callback) callback(null, null);
    }
}