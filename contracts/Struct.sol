// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Struct {
    struct Todo {
        string text;
        bool isCompleted;
    }

    Todo[] public todos;

    function create(string memory _text) public {
        todos.push(Todo(_text, false));
    }

    function get(uint _index) public view returns (string memory, bool) {
        Todo storage todo = todos[_index];

        return (todo.text, todo.isCompleted);
    }
}