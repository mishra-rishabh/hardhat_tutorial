const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Testing Functions", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("Functions");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify the function is working correctly", async function () {
        expect(await contract.getName()).to.equal("");
        await contract.setName("Naveen");
        expect(await contract.getName()).to.equal("Naveen");
    });
});