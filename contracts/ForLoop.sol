// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract ForLoop {
    uint public loopCount;

    function doLoop(uint _n) public {
        for(uint i = 0; i < _n; i++) {
            loopCount += 1;
        }
    }
}