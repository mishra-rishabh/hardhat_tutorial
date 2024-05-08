// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Mapping {
    mapping(address => bool) public myMap;
    mapping(address => mapping(address => uint)) public allowance;  // nested map

    function setMap(address _addr, bool i) public {
        myMap[_addr] = i;
    }

    function getMap(address _addr) public view returns (bool) {
        return myMap[_addr];
    }

    function remove(address _addr) public {
        delete myMap[_addr];
    }

    function getNestedMap(address _owner, address _spender) public view returns (uint) {
        return allowance[_owner][_spender];
    }

    function setNestedMap(address _owner, address _spender, uint _amount) public {
        allowance[_owner][_spender] = _amount;
    }

    function removeNestedMap(address _owner, address _spender) public {
        delete allowance[_owner][_spender];
    }
}