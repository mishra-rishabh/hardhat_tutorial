// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Token {
    string public tokenName;
    uint public tokenCap;

    constructor(string memory _tokenName, uint _tokenCap) {
        tokenName = _tokenName;
        tokenCap = _tokenCap;
    } 
}