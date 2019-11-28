import React, {Component} from 'react'

class Menu extends Component{
    render(){
        return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">TodoApp</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#/todos">Tarefas</a>
            </li>
            <li class="nav-item">
                <li class="nav-item">
                    <a class="nav-link" href="#/todos">Tarefas</a>
                </li>
            </li>
        </ul>
    </nav>
        );
    }
}
export default Menu;


