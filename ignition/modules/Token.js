const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenModule", (m) => {
  const tokenContract = m.contract("Token", ["farji token", 100]);

  return { tokenContract };
});
