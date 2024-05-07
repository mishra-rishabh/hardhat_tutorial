// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract ViewAndPure {
    string private s_name = "Prabhas";

    function getName() public view returns (string memory) {
        return s_name;
    }

    function sum(uint _a, uint _b) public pure returns (uint) {
        return (_a + _b);
    }
}