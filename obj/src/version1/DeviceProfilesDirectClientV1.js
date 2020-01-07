"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DeviceProfilesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-deviceprofiles", "controller", "*", "*", "*"));
    }
    getBaseProfiles(correlationId, callback) {
        let timing = this.instrument(correlationId, 'profiles.get_base_profiles');
        this._controller.getBaseProfiles(correlationId, (err, list) => {
            timing.endTiming();
            callback(err, list);
        });
    }
    getProfiles(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'profiles.get_profiles');
        this._controller.getProfiles(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getProfileById(correlationId, profileId, callback) {
        let timing = this.instrument(correlationId, 'profiles.get_profile_by_id');
        this._controller.getProfileById(correlationId, profileId, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }
    createProfile(correlationId, profile, callback) {
        let timing = this.instrument(correlationId, 'profiles.create_profile');
        this._controller.createProfile(correlationId, profile, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }
    updateProfile(correlationId, profile, callback) {
        let timing = this.instrument(correlationId, 'profiles.update_profile');
        this._controller.updateProfile(correlationId, profile, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }
    deleteProfileById(correlationId, profileId, callback) {
        let timing = this.instrument(correlationId, 'profiles.delete_profile_by_id');
        this._controller.deleteProfileById(correlationId, profileId, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }
}
exports.DeviceProfilesDirectClientV1 = DeviceProfilesDirectClientV1;
//# sourceMappingURL=DeviceProfilesDirectClientV1.js.map