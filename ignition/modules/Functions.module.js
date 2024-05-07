const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("FunctionsModule", (m) => {
    const myFuncModule = m.contract("Functions", []);

    return { myFuncModule };
});