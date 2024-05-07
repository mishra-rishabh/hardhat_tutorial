const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Modifier test", function () {
    let contract;
    let owner, signer;

    beforeEach(async () => {
        [owner, signer] = await ethers.getSigners();
        const Contract = await ethers.getContractFactory("Modifier");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify the modifer in the function", async function () {
        await contract.setName("Allu Arjun");
        expect(await contract.getName()).to.equal("Allu Arjun");

        await expect(contract.connect(signer).setName("Ram Charan")).to.be.revertedWith("not an owner");
    });
});