const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Events test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("Events");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify the Eevents", async () => {
        await expect(contract.setName("Dhruva")).to.emit(contract, "NameEvent").withArgs("Dhruva");
    });
});