const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ArrayModule", (m) => {
    const myArrayMod = m.contract("Array");

    return { myArrayMod };
});