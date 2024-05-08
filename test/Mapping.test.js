const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mapping test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("Mapping");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    })

    it("should be able to verify the mapping", async function () {
        let [signer1, signer2, signer3] = await ethers.getSigners();

        await contract.setMap(signer1, true);
        await contract.setMap(signer2, false);
        await contract.setMap(signer3, true);

        expect(await contract.getMap(signer1.address)).to.equal(true);
        expect(await contract.getMap(signer2.address)).to.equal(false);
        expect(await contract.getMap(signer3.address)).to.equal(true);

        await contract.remove(signer3.address);
        expect(await contract.getMap(signer3.address)).to.equal(false);
    });

    it("should be able to verify the nested mapping", async function () {
        let [owner, spender1, spender2] = await ethers.getSigners();

        await contract.setNestedMap(owner.address, spender1.address, 5);
        await contract.setNestedMap(owner.address, spender2.address, 10);

        expect(await contract.getNestedMap(owner.address, spender1.address)).to.equal(5);
        expect(await contract.getNestedMap(owner.address, spender2.address)).to.equal(10);

        await contract.removeNestedMap(owner.address, spender2.address);
        expect(await contract.getNestedMap(owner.address, spender1.address)).to.equal(5);
        expect(await contract.getNestedMap(owner.address, spender2.address)).to.equal(0);
    });
});