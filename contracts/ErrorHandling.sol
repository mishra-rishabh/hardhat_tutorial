// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract ErrorHandling {
    uint256 public balance;

    function deposit(uint256 _amount) public {
        uint256 oldBalance = balance;
        uint256 newBalance = balance + _amount;

        require(newBalance >= oldBalance, "overflow");

        balance += _amount;
        assert(balance >= _amount);

        if(balance < _amount) {
            revert("underflow");
        }
    }
}