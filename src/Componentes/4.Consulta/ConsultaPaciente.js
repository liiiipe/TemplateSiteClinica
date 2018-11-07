import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import Horarios from './Horarios';




class ConsultaPaciente extends Component {
    
    state = {
        select: "",
        medicos: []
        
    }

    // especialidades = ["Cardiologia", "ClinicoGeral", "Dermatologia", "Geriatria", "Neurologia", "Psicologia"];

    onChange = (e) => {
        this.setState({
            select: [e.target.name]
        })
        // document.getElementById(this.state.select).style.backgroundColor = "green";
        //let teste = document.getElementById(this.state.select);
        //teste.setAttribute("style", "backgroundColor: black");

        /*for(let i = 0; i < this.especialidades.length; i++){
            if(this.state.select !== this.especialidades[i]){
                document.getElementById(this.especialidades[i]).style.backgroundColor = "white";
            }
        }*/
    }
    
    

    onClick = () => {
        document.getElementById("horariosmedicos").style.display = "block";

    }

    render() {
        return (
            <div className="consultas"><br /><br />
                <h1 className="container center">Marcar Consulta</h1>
                <br /><br /><br />
                <div className="container row">
                    <span className="col s12 center"><b>Selecione a data</b></span>
                    <input type="text" className="datepicker center"></input>
                </div>
                <br /><br /><br /><br />
                <div className="row container">
                    <span className="col s12 center"><b>Selecione a especialidade</b></span>
                    <div className="collection">
                        <a href="#!" className="collection-item" onClick={this.onChange} name="Cardiologia" id="Cardiologia">Cardiologia</a>
                        <a href="#!" className="collection-item" onClick={this.onChange} name="ClinicoGeral" id="ClinicoGeral">Clínico Geral</a>
                        <a href="#!" className="collection-item" onClick={this.onChange} name="Dermatologia" id="Dermatologia">Dermatologia</a>
                        <a href="#!" className="collection-item" onClick={this.onChange} name="Geriatria" id="Geriatria">Geriatria</a>
                        <a href="#!" className="collection-item" onClick={this.onChange} name="Neurologia" id="Neurologia">Neurologia</a>
                        <a href="#!" className="collection-item" onClick={this.onChange} name="Psicologia" id="Psicologia">Psicologia</a>
                    </div>
                    <p className="center">A especialidade escolhida é <b>{this.state.select}</b>?</p>
                    <div className="row center">
                        <a className="area2 waves-effect waves-light btn" onClick={this.onClick}>Confirmar</a>
                    </div>
                </div>
                
                <Horarios espec={this.state.select}/>
                



            </div>
        )
    }
    
}

export default ConsultaPaciente