const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Visibility test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("Visibility");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify the visibility of the functions", async function () {
        await contract.setName("Dexter");
        expect(await contract.getName()).to.equal("Dexter");

        expect(await contract.externalFunction()).to.equal("external-function");
        expect(await contract.s_id()).to.equal("123");
        expect(await contract.getAge()).to.equal(50);
    });
});
