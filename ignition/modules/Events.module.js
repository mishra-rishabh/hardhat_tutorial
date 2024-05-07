const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("EventsModule", (m) => {
    const myEventModule = m.contract("Events");

    return { myEventModule };
});