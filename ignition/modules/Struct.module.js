const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("StructModule", (m) => {
    const myStructMod = m.contract("Struct");

    return { myStructMod };
});