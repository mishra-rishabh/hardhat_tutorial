const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("EnumModule", (m) => {
    const myEnumMod = m.contract("Enum");

    return { myEnumMod };
});