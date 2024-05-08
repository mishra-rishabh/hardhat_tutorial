// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Enum {
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Cancelled
    }

    Status public status;

    function ship() public {
        require(status == Status.Pending);
        status = Status.Shipped;
    }
}