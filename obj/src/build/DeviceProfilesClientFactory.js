"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const DeviceProfilesNullClientV1_1 = require("../version1/DeviceProfilesNullClientV1");
const DeviceProfilesMemoryClientV1_1 = require("../version1/DeviceProfilesMemoryClientV1");
const DeviceProfilesDirectClientV1_1 = require("../version1/DeviceProfilesDirectClientV1");
const DeviceProfilesHttpClientV1_1 = require("../version1/DeviceProfilesHttpClientV1");
const DeviceProfilesLambdaClientV1_1 = require("../version1/DeviceProfilesLambdaClientV1");
class DeviceProfilesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(DeviceProfilesClientFactory.NullClientV1Descriptor, DeviceProfilesNullClientV1_1.DeviceProfilesNullClientV1);
        this.registerAsType(DeviceProfilesClientFactory.MemoryClientV1Descriptor, DeviceProfilesMemoryClientV1_1.DeviceProfilesMemoryClientV1);
        this.registerAsType(DeviceProfilesClientFactory.DirectClientV1Descriptor, DeviceProfilesDirectClientV1_1.DeviceProfilesDirectClientV1);
        this.registerAsType(DeviceProfilesClientFactory.HttpClientV1Descriptor, DeviceProfilesHttpClientV1_1.DeviceProfilesHttpClientV1);
        this.registerAsType(DeviceProfilesClientFactory.LambdaClientV1Descriptor, DeviceProfilesLambdaClientV1_1.DeviceProfilesLambdaClientV1);
    }
}
exports.DeviceProfilesClientFactory = DeviceProfilesClientFactory;
DeviceProfilesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceprofiles', 'factory', 'default', 'default', '1.0');
DeviceProfilesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceprofiles', 'client', 'null', 'default', '1.0');
DeviceProfilesClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceprofiles', 'client', 'memory', 'default', '1.0');
DeviceProfilesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceprofiles', 'client', 'direct', 'default', '1.0');
DeviceProfilesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceprofiles', 'client', 'http', 'default', '1.0');
DeviceProfilesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-deviceprofiles', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=DeviceProfilesClientFactory.js.map