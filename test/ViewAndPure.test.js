const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("View and Pure Test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("ViewAndPure");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify the view and pure functions", async function () {
        expect(await contract.getName()).to.equal("Prabhas");
        expect(await contract.sum(2, 3)).to.equal(5);
    });
});