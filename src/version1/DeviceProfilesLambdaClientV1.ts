let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { BaseDeviceProfileV1 } from './BaseDeviceProfileV1';
import { DeviceProfileV1 } from './DeviceProfileV1';
import { IDeviceProfilesClientV1 } from './IDeviceProfilesClientV1';

export class DeviceProfilesLambdaClientV1 extends CommandableLambdaClient implements IDeviceProfilesClientV1 {       

    constructor(config?: any) {
        super('device_profiles');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getBaseProfiles(correlationId: string, 
        callback: (err: any, list: BaseDeviceProfileV1[]) => void): void {
        this.callCommand( 
            'get_base_profiles', 
            correlationId,
            {}, 
            callback
        );
    }

    public getProfiles(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void {
        this.callCommand( 
            'get_profiles', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getProfileById(correlationId: string, profileId: string,
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this.callCommand( 
            'get_profile_by_id',
            correlationId,
            {
                profile_id: profileId
            }, 
            callback
        );        
    }

    public createProfile(correlationId: string, profile: DeviceProfileV1,
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this.callCommand(
            'create_profile',
            correlationId,
            {
                profile: profile
            }, 
            callback
        );
    }

    public updateProfile(correlationId: string, profile: DeviceProfileV1,
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this.callCommand(
            'update_profile', 
            correlationId,
            {
                profile: profile
            }, 
            callback
        );
    }

    public deleteProfileById(correlationId: string, profileId: string,
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this.callCommand(
            'delete_profile_by_id', 
            correlationId,
            {
                profile_id: profileId
            }, 
            callback
        );
    }
    
}
