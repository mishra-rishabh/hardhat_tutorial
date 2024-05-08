const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Array test", function () {
    let contract;

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory("Array");
        contract = await Contract.deploy();
        await contract.waitForDeployment();
    });

    it("should be able to verify the array functions", async function () {
        await contract.pushToAdd(1);
        await contract.pushToAdd(2);
        await contract.pushToAdd(3);
        await contract.pushToAdd(4);    // Array [1, 2, 3, 4]

        expect(await contract.getItemInArray(1)).to.equal(2);

        await contract.updateArray(1, 5);   // Array [1, 5, 3, 4]
        expect(await contract.getItemInArray(1)).to.equal(5);

        await contract.remove(1);   // Array [1, 0, 3, 4]
        expect(await contract.getItemInArray(1)).to.equal(0);
        expect(await contract.getLength()).to.equal(4);

        await contract.removeAndCompact(1); // Array [1, 4, 3]
        expect(await contract.getItemInArray(1)).to.equal(4);
        expect(await contract.getItemInArray(2)).to.equal(3);
        expect(await contract.getLength()).to.equal(3);
    });
});