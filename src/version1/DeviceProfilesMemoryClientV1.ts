const _ = require('lodash');

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IDeviceProfilesClientV1 } from './IDeviceProfilesClientV1';
import { BaseDeviceProfileV1 } from './BaseDeviceProfileV1';
import { BaseDeviceProfilesV1 } from './BaseDeviceProfilesV1';
import { DeviceProfileV1 } from './DeviceProfileV1';

export class DeviceProfilesMemoryClientV1 implements IDeviceProfilesClientV1 {
    private _profiles: DeviceProfileV1[] = [];          
    
    public getBaseProfiles(correlationId: string, 
        callback: (err: any, list: BaseDeviceProfileV1[]) => void): void {
        callback(null, BaseDeviceProfilesV1);
    }

    private matchString(value: string, search: string): boolean {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }

    private matchSearch(item: DeviceProfileV1, search: string): boolean {
        search = search.toLowerCase();
        if (this.matchString(item.name, search))
            return true;
        return false;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
        let search = filter.getAsNullableString('search');
        let id = filter.getAsNullableString('id');
        let orgId = filter.getAsNullableString('org_id');
                
        return (item) => {
            if (id && item.id != id) 
                return false;
            if (orgId && item.org_id != orgId) 
                return false;
            if (search && !this.matchSearch(item, search)) 
                return false;
            return true; 
        };
    }

    public getProfiles(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void {

        let profiles = _.filter(this._profiles, this.composeFilter(filter));
        callback(null, new DataPage<DeviceProfileV1>(profiles, profiles.length));
    }

    public getProfileById(correlationId: string, profileId: string, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {

        let profile = _.find(this._profiles, (d) => d.id == profileId);
        callback(null, profile);
    }

    public createProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this._profiles.push(profile);
        callback(null, profile);
    }

    public updateProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this._profiles = _.filter(this._profiles, (d) => d.id != profile.id);
        this._profiles.push(profile);        
        callback(null, profile);
    }

    public deleteProfileById(correlationId: string, profileId: string,
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        let profile = _.find(this._profiles, (d) => d.id == profileId);
        this._profiles = _.filter(this._profiles, (d) => d.id != profile.id);        
        callback(null, profile);
    }
}