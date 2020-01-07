import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { DeviceProfilesNullClientV1 } from '../version1/DeviceProfilesNullClientV1';
import { DeviceProfilesMemoryClientV1 } from '../version1/DeviceProfilesMemoryClientV1';
import { DeviceProfilesDirectClientV1 } from '../version1/DeviceProfilesDirectClientV1';
import { DeviceProfilesHttpClientV1 } from '../version1/DeviceProfilesHttpClientV1';
import { DeviceProfilesLambdaClientV1 } from '../version1/DeviceProfilesLambdaClientV1';

export class DeviceProfilesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-deviceprofiles', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-deviceprofiles', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-deviceprofiles', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-deviceprofiles', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-deviceprofiles', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-deviceprofiles', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(DeviceProfilesClientFactory.NullClientV1Descriptor, DeviceProfilesNullClientV1);
		this.registerAsType(DeviceProfilesClientFactory.MemoryClientV1Descriptor, DeviceProfilesMemoryClientV1);
		this.registerAsType(DeviceProfilesClientFactory.DirectClientV1Descriptor, DeviceProfilesDirectClientV1);
		this.registerAsType(DeviceProfilesClientFactory.HttpClientV1Descriptor, DeviceProfilesHttpClientV1);
		this.registerAsType(DeviceProfilesClientFactory.LambdaClientV1Descriptor, DeviceProfilesLambdaClientV1);
	}
	
}
