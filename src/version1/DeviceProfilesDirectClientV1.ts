import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IDeviceProfilesClientV1 } from './IDeviceProfilesClientV1';
//import { IDeviceProfilesController } from 'iqs-services-deviceprofiles-node';
import { BaseDeviceProfileV1 } from './BaseDeviceProfileV1';
import { DeviceProfileV1 } from './DeviceProfileV1';

export class DeviceProfilesDirectClientV1 extends DirectClient<any> implements IDeviceProfilesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-deviceprofiles", "controller", "*", "*", "*"))
    }

    public getBaseProfiles(correlationId: string,  
        callback: (err: any, list: BaseDeviceProfileV1[]) => void): void {
        let timing = this.instrument(correlationId, 'profiles.get_base_profiles');
        this._controller.getBaseProfiles(correlationId, (err, list) => {
            timing.endTiming();
            callback(err, list);
        });
    }
    
    public getProfiles(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void {
        let timing = this.instrument(correlationId, 'profiles.get_profiles');
        this._controller.getProfiles(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getProfileById(correlationId: string, profileId: string, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        let timing = this.instrument(correlationId, 'profiles.get_profile_by_id');
        this._controller.getProfileById(correlationId, profileId, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }

    public createProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        let timing = this.instrument(correlationId, 'profiles.create_profile');
        this._controller.createProfile(correlationId, profile, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }

    public updateProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        let timing = this.instrument(correlationId, 'profiles.update_profile');
        this._controller.updateProfile(correlationId, profile, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }

    public deleteProfileById(correlationId: string, profileId: string,
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        let timing = this.instrument(correlationId, 'profiles.delete_profile_by_id');
        this._controller.deleteProfileById(correlationId, profileId, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }
}