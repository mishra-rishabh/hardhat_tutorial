const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Testing constructors", function () {
    let contract;
    let owner;

    beforeEach(async() => {
        [owner] = await ethers.getSigners();
        const Contract = await ethers.getContractFactory("MyConstructor", owner);

        contract = await Contract.deploy(5, 10);
        await contract.waitForDeployment();
    });

    it("should be able to verify all the variable values", async function () {
        expect(await contract.x()).to.equal(5);
        expect(await contract.y()).to.equal(10);
        expect(await contract.owner()).to.equal(owner.address);
        expect(await contract.createdAt()).not.to.be.null;
    });
});