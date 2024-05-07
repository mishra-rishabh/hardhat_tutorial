const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Error Handling test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("ErrorHandling");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to handle the errors", async () => {
        await contract.deposit(100);

        expect(await contract.balance()).to.equal(100);
    });
});