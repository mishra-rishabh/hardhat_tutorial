const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ForLoopModule", (m) => {
    const myForLoopMod = m.contract("ForLoop");

    return { myForLoopMod };
});