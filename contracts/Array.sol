// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Array {
    uint[] public myArray;  // dynamic array
    uint[] public myArray2 = [1, 2, 3, 4];  // dynamic array with 1, 2, 3, 4 as default values
    uint[10] public fixedArray; // fixed size array

    function pushToAdd(uint _num) public {
        myArray.push(_num);
    }

    function getItemInArray(uint _index) public view returns (uint) {
        return myArray[_index];
    }

    function updateArray(uint _index, uint _value) public {
        myArray[_index] = _value;
    }

    function remove(uint _index) public {
        delete myArray[_index];
    }

    function removeAndCompact(uint _index) public {
        myArray[_index] = myArray[myArray.length - 1];
        myArray.pop();
    }

    function getLength() public view returns (uint) {
        return myArray.length;
    }
}