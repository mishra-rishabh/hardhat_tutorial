const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MappingModule", (m) => {
    const myMappingMod = m.contract("Mapping");

    return { myMappingMod };
});