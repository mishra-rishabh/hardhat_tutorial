const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Struct test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("Struct");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify struct", async function () {
        await contract.create("study for 1 hr");
        
        let [text, completed] = await contract.get(0);
        expect(text).to.equal("study for 1 hr");
        expect(completed).to.equal(false);
    });
});