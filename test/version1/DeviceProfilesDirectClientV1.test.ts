import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DeviceProfilesMemoryPersistence } from 'iqs-services-deviceprofiles-node';
import { DeviceProfilesController } from 'iqs-services-deviceprofiles-node';
import { DeviceProfilesDirectClientV1 } from '../../src/version1/DeviceProfilesDirectClientV1';
import { DeviceProfilesClientFixtureV1 } from './DeviceProfilesClientFixtureV1';

suite('DeviceProfilesDirectClientV1', ()=> {
    let client: DeviceProfilesDirectClientV1;
    let fixture: DeviceProfilesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new DeviceProfilesMemoryPersistence();
        let controller = new DeviceProfilesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-deviceprofiles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-deviceprofiles', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new DeviceProfilesDirectClientV1();
        client.setReferences(references);

        fixture = new DeviceProfilesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Get Base Profiles', (done) => {
        fixture.testGetBaseProfiles(done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
