// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Events {
    string private s_name;

    event NameEvent(string newName);

    function setName(string memory _newName) public {
        s_name = _newName;

        emit NameEvent(_newName);
    }
}