"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DeviceProfilesHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/device_profiles');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getBaseProfiles(correlationId, callback) {
        this.callCommand('get_base_profiles', correlationId, {}, callback);
    }
    getProfiles(correlationId, filter, paging, callback) {
        this.callCommand('get_profiles', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getProfileById(correlationId, profileId, callback) {
        this.callCommand('get_profile_by_id', correlationId, {
            profile_id: profileId
        }, callback);
    }
    createProfile(correlationId, profile, callback) {
        this.callCommand('create_profile', correlationId, {
            profile: profile
        }, callback);
    }
    updateProfile(correlationId, profile, callback) {
        this.callCommand('update_profile', correlationId, {
            profile: profile
        }, callback);
    }
    deleteProfileById(correlationId, profileId, callback) {
        this.callCommand('delete_profile_by_id', correlationId, {
            profile_id: profileId
        }, callback);
    }
}
exports.DeviceProfilesHttpClientV1 = DeviceProfilesHttpClientV1;
//# sourceMappingURL=DeviceProfilesHttpClientV1.js.map