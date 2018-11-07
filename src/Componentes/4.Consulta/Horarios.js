import React, { Component } from 'react';
import firebase from 'firebase';

class Horarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicos: [""],
        
        };
        this.Vamo = this.Vamo.bind(this);
    }
    

    Vamo = () => {
        let medicosehorarios;
        let horarios = firebase.database().ref('/20-01-2019/especialidades/' + this.props.espec);
        horarios.on('value', function (snapshot) {
            medicosehorarios = snapshot.val();
            console.log(medicosehorarios);
            console.log(Object.keys(medicosehorarios));
            let key = Object.keys(medicosehorarios);
            let tamanho = key.length;
            /*for (let i = 0; i < tamanho; i++) {
                this.setState({
                        medicos: key[i]
                    })
                }*/
            /*this.setState({
                medicos: key
            })
            console.log(this.state.medicos);*/
            }
        )
    }

    render() {
        return (
            <div className="consultas row " style={{ display: 'none' }} id="horariosmedicos">
                <br/><br/><br/>
                <p className="center-align "><b>Selecione o horário:</b></p>
                <div className="conteiner " >
                    <div className="collection col s3 center z-depth-1" >
                        <p className="center">Nome médico</p>
                        <a href="#!" className="collection-item" onClick={this.Vamo}>07:00</a>
                        <a href="#!" className="collection-item" >-</a>
                        <a href="#!" className="collection-item" >09:00</a>
                        <a href="#!" className="collection-item" >10:00</a>
                        <a href="#!" className="collection-item" >-</a>
                    </div>
                </div>
                <div className="conteiner" >
                    <div className="collection col s3 center z-depth-1" >
                        <p className="center">Nome médico2</p>
                        <a href="#!" className="collection-item" onClick={this.Vamo}>-</a>
                        <a href="#!" className="collection-item" >-</a>
                        <a href="#!" className="collection-item" >09:00</a>
                        <a href="#!" className="collection-item" >10:00</a>
                        <a href="#!" className="collection-item" >-</a>
                    </div>
                </div>
                <div className="conteiner" >
                    <div className="collection col s3 center z-depth-1" >
                        <p className="center">Nome médico3</p>
                        <a href="#!" className="collection-item" onClick={this.Vamo}>07:00</a>
                        <a href="#!" className="collection-item" >-</a>
                        <a href="#!" className="collection-item" >09:00</a>
                        <a href="#!" className="collection-item" >-</a>
                        <a href="#!" className="collection-item" >-</a>
                    </div>
                </div>
                <div className="conteiner" >
                    <div className="collection col s3 center z-depth-1" >
                        <p className="center">Nome médico3</p>
                        <a href="#!" className="collection-item" onClick={this.Vamo}>07:00</a>
                        <a href="#!" className="collection-item" >-</a>
                        <a href="#!" className="collection-item" >-</a>
                        <a href="#!" className="collection-item" >-</a>
                        <a href="#!" className="collection-item" >-</a>
                    </div>
                </div>
                <div className="row center">
                        <a className="area2 waves-effect waves-light btn" onClick={this.onClick}>Confirmar</a>
                </div>
            </div>
        )
    }
}

export default Horarios