const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Fallback Function test", function() {
    let contract;
    let owner;

    beforeEach(async () => {
        [owner] = await ethers.getSigners();

        const Contract = await ethers.getContractFactory("FallbackFunction", owner);
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify the fallback function", async function () {
        await owner.sendTransaction({
            to: contract.address,
            value: ethers.parseEther("1.0"),
            // data: "0x",
        });

        expect(await contract.provider.getBalance(contract.address))
        .to.equal(ethers.parseEther("1.0"));
    });
});