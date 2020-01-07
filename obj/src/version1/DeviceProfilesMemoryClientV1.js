"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const BaseDeviceProfilesV1_1 = require("./BaseDeviceProfilesV1");
class DeviceProfilesMemoryClientV1 {
    constructor() {
        this._profiles = [];
    }
    getBaseProfiles(correlationId, callback) {
        callback(null, BaseDeviceProfilesV1_1.BaseDeviceProfilesV1);
    }
    matchString(value, search) {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }
    matchSearch(item, search) {
        search = search.toLowerCase();
        if (this.matchString(item.name, search))
            return true;
        return false;
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_node_1.FilterParams();
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
    getProfiles(correlationId, filter, paging, callback) {
        let profiles = _.filter(this._profiles, this.composeFilter(filter));
        callback(null, new pip_services3_commons_node_2.DataPage(profiles, profiles.length));
    }
    getProfileById(correlationId, profileId, callback) {
        let profile = _.find(this._profiles, (d) => d.id == profileId);
        callback(null, profile);
    }
    createProfile(correlationId, profile, callback) {
        this._profiles.push(profile);
        callback(null, profile);
    }
    updateProfile(correlationId, profile, callback) {
        this._profiles = _.filter(this._profiles, (d) => d.id != profile.id);
        this._profiles.push(profile);
        callback(null, profile);
    }
    deleteProfileById(correlationId, profileId, callback) {
        let profile = _.find(this._profiles, (d) => d.id == profileId);
        this._profiles = _.filter(this._profiles, (d) => d.id != profile.id);
        callback(null, profile);
    }
}
exports.DeviceProfilesMemoryClientV1 = DeviceProfilesMemoryClientV1;
//# sourceMappingURL=DeviceProfilesMemoryClientV1.js.map