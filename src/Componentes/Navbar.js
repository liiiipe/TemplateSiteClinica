import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logout from './Logout';
import firebase from 'firebase';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul id="dropdown1" className="dropdown-content">
                    <li><Link to="/consultas">Marcar Consulta</Link></li>
                    <li><a href="#!">Minhas Consultas</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper #00bfa5 teal accent-4">
                        <div className="container">
                            <Link to="/" className="brand-logo"><a class="btn-floating pulse"><i class="material-icons">favorite</i></a>&nbsp; Logo</Link>
                            <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/sobrenos">A Clínica</Link></li>
                                <li><Link to="/servicos">Serviços</Link></li>
                                <li><a className="dropdown-trigger waves-effect waves-light btn" data-target="dropdown1" href="#!">Consultas<i className="material-icons right">arrow_drop_down</i></a></li>
                                <li id="toLogout" style={{ display: 'none' }}>
                                    <Logout />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobrenos">A Clínica</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/consultas">Consultas</Link></li>
                </ul>
            </div >
        )
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                let buttonLogout = document.getElementById("toLogout");
                buttonLogout.setAttribute("style", "display: block");
            }
        });
    }
}

export default Navbar;