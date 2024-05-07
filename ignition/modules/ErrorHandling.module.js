const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ErrorHandlingModule", (m) => {
    const myErrorHandlingModule = m.contract("ErrorHandling");

    return { myErrorHandlingModule };
});