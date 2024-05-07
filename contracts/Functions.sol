// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Functions {
    string private s_name;

    function setName(string memory _newName) public {
        s_name = _newName;
    }

    function getName() public view returns (string memory) {
        return s_name;
    }
}