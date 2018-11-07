import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import fototeste from '../1.Home/parallaxclinica2.png'

class Consulta extends Component {

    render() {
        return (
            <div>
                <div className="container center">
                    <h1>Consultas</h1>
                    <p>A Clínica LifeStyle de Fortaleza oferece aos clientes consultas ambulatoriais em diversas ESPECIALIDADES MÉDICAS. Prezamos pelo atendimento de excelência, com médicos qualificados, ótima estrutura física e funcionários treinados para o seu melhor conforto!Nossas consultas são pré-agendadas. Para agendar uma consulta particular ou de convênios que atendemos, basta entrar em contato pelo nosso telefone (85)3305-9000 ou marcando uma consulta clicando no botão abaixo.</p>
                    <a className="waves-effect waves-light btn-large modal-trigger" href="#modal1">Marcar consulta</a>
                    <br />
                    <br />
                    
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Faça Login</h4>
                            <br />
                            <br />
                            <Link to="/LoginPaciente" className="area1 waves-effect waves-light btn-large">Paciente</Link>
                            <a className="area2 waves-effect waves-light btn-large">Médico</a>
                        </div>
                    </div>

                    <div className="row">
                        <img className="imgconsulta z-depth-3" src={fototeste} alt="img1" />
                        <img className="imgconsulta z-depth-3" src={fototeste} alt="img2" />
                        <img className="imgconsulta z-depth-3" src={fototeste} alt="img3" />
                    </div>
                </div>
                <div className="area container">



                </div>
            </div>
        );
    }
}

export default Consulta;