import { assert } from 'chai';
import { ContractDeployer, assertRowsEqual } from 'lamington';
import { Example } from './example';

describe("Example", () => {

    let contract:Example;

    beforeEach(async () => {
        contract = await ContractDeployer.deploy<Example>("contracts/example/example");
    });

    it("Should initialize with account name", () => {
        return assert.isString(contract.account.name, "Contract name should be 'example'");
    });

    it("Should have correct defaults");
    
    it("Should print a message");
})