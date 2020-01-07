"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class DeviceProfilesNullClientV1 {
    getBaseProfiles(correlationId, callback) {
        callback(null, []);
    }
    getProfiles(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getProfileById(correlationId, profileId, callback) {
        callback(null, null);
    }
    createProfile(correlationId, profile, callback) {
        callback(null, profile);
    }
    updateProfile(correlationId, profile, callback) {
        callback(null, profile);
    }
    deleteProfileById(correlationId, profileId, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.DeviceProfilesNullClientV1 = DeviceProfilesNullClientV1;
//# sourceMappingURL=DeviceProfilesNullClientV1.js.map