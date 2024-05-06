// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Variables {
    // s_ denotes that it is a state variable and makes it easy to identify
    uint public s_storedData;

    function getResult() public pure returns (uint) {
        // local variables
        uint a = 7;
        uint b = 3;

        uint result = a + b;

        return result;
    }

    function getSenderOfTxn() public view returns (address) {
        return msg.sender;  // global variable
    }

    function getChainId() public view returns (uint) {
        return block.chainid;
    }
}