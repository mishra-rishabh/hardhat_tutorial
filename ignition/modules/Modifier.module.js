const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ModifierModule", (m) => {
    const myModifierMod = m.contract("Modifier");

    return { myModifierMod };
});