const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("FallbackFunctionModule", (m) => {
    const myFallbackModule = m.contract("FallbackFunction");

    return { myFallbackModule };
});