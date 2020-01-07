import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DeviceProfilesMemoryPersistence } from 'iqs-services-deviceprofiles-node';
import { DeviceProfilesController } from 'iqs-services-deviceprofiles-node';
import { DeviceProfilesHttpServiceV1 } from 'iqs-services-deviceprofiles-node';
import { DeviceProfilesHttpClientV1 } from '../../src/version1/DeviceProfilesHttpClientV1';
import { DeviceProfilesClientFixtureV1 } from './DeviceProfilesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('DeviceProfilesRestClientV1', ()=> {
    let service: DeviceProfilesHttpServiceV1;
    let client: DeviceProfilesHttpClientV1;
    let fixture: DeviceProfilesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new DeviceProfilesMemoryPersistence();
        let controller = new DeviceProfilesController();

        service = new DeviceProfilesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-deviceprofiles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-deviceprofiles', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-deviceprofiles', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new DeviceProfilesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new DeviceProfilesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Get Base Profiles', (done) => {
        fixture.testGetBaseProfiles(done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
