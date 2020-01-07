import { DeviceProfilesMemoryClientV1 } from '../../src/version1/DeviceProfilesMemoryClientV1';
import { DeviceProfilesClientFixtureV1 } from './DeviceProfilesClientFixtureV1';

suite('DeviceProfilesMemoryClientV1', ()=> {
    let client: DeviceProfilesMemoryClientV1;
    let fixture: DeviceProfilesClientFixtureV1;

    suiteSetup(() => {
        client = new DeviceProfilesMemoryClientV1();

        fixture = new DeviceProfilesClientFixtureV1(client);
    });
    
    test('Get Base Profiles', (done) => {
        fixture.testGetBaseProfiles(done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
