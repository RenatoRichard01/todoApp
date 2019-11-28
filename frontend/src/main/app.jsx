import '/home/renato/Documentos/LASIC/Guia-Do-Santuario/todo-app/frontend/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/home/renato/Documentos/LASIC/Guia-Do-Santuario/todo-app/frontend/node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Index from '../index'

import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        )
    }
}
export default App;
