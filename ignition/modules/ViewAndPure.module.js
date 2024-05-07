const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ViewAndPureModule", (m) => {
    const myViewAndPureMod = m.contract("ViewAndPure");

    return { myViewAndPureMod };
});