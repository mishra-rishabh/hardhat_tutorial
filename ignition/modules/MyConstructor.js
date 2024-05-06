const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MyConstructorModule", (m) => {
    const myConstructor = m.contract("MyConstructor", [5, 10]);

    return {myConstructor};
})