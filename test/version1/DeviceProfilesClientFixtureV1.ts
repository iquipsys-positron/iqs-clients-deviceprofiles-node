let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { DeviceProfileV1 } from '../../src/version1/DeviceProfileV1';
import { IDeviceProfilesClientV1 } from '../../src/version1/IDeviceProfilesClientV1';

let PROFILE1: DeviceProfileV1 = {
    id: '1',
    org_id: '1',
    base_profile_id: 'custom',
    name: 'Test profile 1',
    params: [],
    events: [],
    commands: []
};
let PROFILE2: DeviceProfileV1 = {
    id: '2',
    org_id: '1',
    base_profile_id: 'custom',
    name: 'Test profile 2',
    params: [],
    events: [],
    commands: []
};

export class DeviceProfilesClientFixtureV1 {
    private _client: IDeviceProfilesClientV1;
    
    constructor(client: IDeviceProfilesClientV1) {
        this._client = client;
    }

    public testGetBaseProfiles(done) {
        this._client.getBaseProfiles(
            null,
            (err, profiles) => {
                assert.isNull(err);

                assert.isArray(profiles);
                assert.isTrue(profiles.length > 0);

                done();
            }
        );
    }
    
    public testCrudOperations(done) {
        let profile1, profile2: DeviceProfileV1;

        async.series([
        // Create one profile
            (callback) => {
                this._client.createProfile(
                    null,
                    PROFILE1,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.org_id, PROFILE1.org_id);
                        assert.equal(profile.name, PROFILE1.name);

                        profile1 = profile;

                        callback();
                    }
                );
            },
        // Create another profile
            (callback) => {
                this._client.createProfile(
                    null,
                    PROFILE2,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.org_id, PROFILE2.org_id);
                        assert.equal(profile.name, PROFILE2.name);

                        profile2 = profile;

                        callback();
                    }
                );
            },
        // Get all profiles
            (callback) => {
                this._client.getProfiles(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, profiles) => {
                        assert.isNull(err);

                        assert.isObject(profiles);
                        assert.isTrue(profiles.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the profile
            (callback) => {
                profile1.name = 'Updated profile 1';

                this._client.updateProfile(
                    null,
                    profile1,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.name, 'Updated profile 1');
                        assert.equal(profile.id, PROFILE1.id);

                        profile1 = profile;

                        callback();
                    }
                );
            },
        // Delete profile
            (callback) => {
                this._client.deleteProfileById(
                    null,
                    profile1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete profile
            (callback) => {
                this._client.getProfileById(
                    null,
                    profile1.id,
                    (err, profile) => {
                        assert.isNull(err);
                        
                        assert.isNull(profile || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
