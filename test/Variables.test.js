const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Testing Variables", function () {
    let contract;
    let owner;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("Variables");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify all the variable values", async function () {
        expect(await contract.getResult()).to.equal(10);
        expect(await contract.s_storedData()).to.equal(0);

        [ owner ] = await ethers.getSigners();
        expect(await contract.getSenderOfTxn()).to.equal(owner.address);
        expect(await contract.getChainId()).to.equal(31337);    // hardhat chainId = 31337 by default
    });
});