const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VisibilityModule", (m) => {
    const myVisibilityMod = m.contract("Visibility", []);

    return { myVisibilityMod };
});