// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Visibility {
    string private s_name;
    uint256 internal s_age = 50;
    string public s_id = "123";

    function setName(string memory _newName) public {
        s_name = _newName;
    }

    function getName() public view returns (string memory) {
        return s_name;
    }

    function privateFunction() private view returns (uint256) {
        return s_age;
    }

    function getAge() public view returns (uint256) {
        return privateFunction();
    }

    function externalFunction() external pure returns (string memory) {
        return "external-function";
    }
}