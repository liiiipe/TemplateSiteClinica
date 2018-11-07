import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

class CadastroPaciente extends Component {
    state = {
        NomeImput: "",
        TelefoneImput: "",
        EmailImput: "",
        SenhaImput: ""
    }

    SetAtrbt = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    Clique = () => {
        let nome = this.state.NomeImput;
        let telefone = this.state.TelefoneImput;
        let email = this.state.EmailImput;
        let senha = this.state.SenhaImput;
        if ((this.state.NomeImput !== "") && (this.state.TelefoneImput !== "") && (this.state.EmailImput !== "") && (this.state.SenhaImput !== "")) {
            if(firebase.auth().createUserWithEmailAndPassword(email, senha).then(function () {
                let userId = firebase.auth().currentUser.uid;
                firebase.database().ref('pacientes/' + userId).set({
                    nome: nome,
                    telefone: telefone,
                    email: email,
                }).then(function () {
                    window.location.reload();
                }
                );
            })){
                alert('Cadastro efetuado com sucesso!!!')
            } else{
                alert('Cadastro não efetuado.')
            }
        } else {
            let divalerta = document.getElementById("alerta");
            divalerta.setAttribute("style", "display: block");
        }
    }

    ExcluiAlerta = () => {
        let divAlerta = document.getElementById("alerta");
        divAlerta.setAttribute("style", "display: none");
    }

    render() {
        return (
            <div>
                <br />
                <h1 className="center light">Faça seu Cadastro</h1>
                <div className="row container z-depth-1 white" style={{ borderRadius: '50px' }}>
                    <br />
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="name" type="text" className="validate" name="NomeImput" onChange={this.SetAtrbt} />
                                <label htmlFor="name">Nome completo</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="telefone" type="text" className="validate" name="TelefoneImput" onChange={this.SetAtrbt} />
                                <label htmlFor="telefone">Telefone</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" name="EmailImput" onChange={this.SetAtrbt} />
                                <label htmlFor="email">Email</label>
                                <small>Insira um email válido</small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" name="SenhaImput" onChange={this.SetAtrbt} />
                                <label htmlFor="password">Senha</label>
                                <small>Insira uma senha com 6 caracteres ou mais</small>
                            </div>
                        </div>
                        <div className="row center">
                            <a className="waves-effect waves-light btn" onClick={this.Clique}>Cadastrar</a>
                        </div>
                        <div class="col s12 center" id="alerta" style={{ display: 'none' }}>
                        Por Favor! Verifique todos os campos!
                        <a onClick={this.ExcluiAlerta}><i class="close material-icons">close</i></a>
                        <br />
                        <br />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CadastroPaciente;