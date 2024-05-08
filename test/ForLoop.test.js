const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("For loop test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("ForLoop");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify the for loop", async function () {
        await contract.doLoop(2);
        expect(await contract.loopCount()).to.equal(2);
        
        await contract.doLoop(3);
        expect(await contract.loopCount()).to.equal(5);
    });
});