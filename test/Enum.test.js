const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Enum test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("Enum");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify enum", async function () {
        expect(await contract.status()).to.equal(0);

        await contract.ship();
        expect(await contract.status()).to.equal(1);
    });
});