const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VariablesModule", (m) => {
    const myVarModule = m.contract("Variables", []);

    return { myVarModule };
});