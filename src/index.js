import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import ToDoList from './todolist';

var destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <ToDoList />
    </div>,
    destination
);