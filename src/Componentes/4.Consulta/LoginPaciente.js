import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import ConsultaPaciente from './ConsultaPaciente';

class LoginPaciente extends Component {
    state = {
        SenhaLogin: "",
        EmailLogin: "",
    }

    SetSenhaeEmail = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    CliqueLogin = () => {
        let email = this.state.EmailLogin;
        let senha = this.state.SenhaLogin;
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function () {
            firebase.auth().signInWithEmailAndPassword(email, senha).then(function () {
                console.log("Logado!");
                window.location.reload();
            });
        })
        firebase.auth().onAuthStateChanged(function (user) {
            if (!user) {
                let divalerta = document.getElementById("alerta");
                divalerta.setAttribute("style", "display: block");
            }
        });
        
    }

    ExcluiAlerta = () => {
        let divAlerta = document.getElementById("alerta");
        divAlerta.setAttribute("style", "display: none");
    }

    render() {
        return (
            <div >
                <div id="divlogin">
                    <h1 className="center light">Faça Login</h1>
                    <div className="row container z-depth-1 white" style={{ borderRadius: '50px' }}>
                        <form className="col s12">
                            <br />
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" name="EmailLogin" onChange={this.SetSenhaeEmail} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" name="SenhaLogin" onChange={this.SetSenhaeEmail} />
                                    <label htmlFor="password">Senha</label>
                                </div>
                            </div>
                            <div className="row center">
                                <a className="waves-effect waves-light btn" onClick={this.CliqueLogin} >Entrar</a>
                            </div>
                            <div className="col s12 center" id="alerta" style={{ display: 'none' }}>
                                Por Favor! Verifique seu email e senha!
                                <a onClick={this.ExcluiAlerta}><i className="close material-icons">close</i></a>
                                <br />
                                <br />
                            </div>
                            <div className="row center">
                                Se ainda não tiver uma conta &nbsp;
                                <Link to="/CadastroPaciente" className="waves-effect waves-light">Cadastre-se</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="divconsultas" style={{ display: 'none' }}>
                    <ConsultaPaciente />
                </div>
                
            </div>
        )
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                let divlogin = document.getElementById("divlogin");
                divlogin.setAttribute("style", "display: none");
                let divconsultas = document.getElementById("divconsultas");
                divconsultas.setAttribute("style", "display: block");
                console.log(user.uid);
            }
        });
    }

}

export default LoginPaciente;