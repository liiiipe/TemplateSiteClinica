import React, { Component } from 'react';
import sobre1 from './medico.jpg'
import sobre2 from './recepcao1.jpg'

class AClinica extends Component {
    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img src={sobre1} alt="sobre1" /></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <h1 className="header center light" >Clínica Life Style</h1>
                        <p className="grey-text text-darken-3 lighten-3 center">Onde você e sua família vão se sentir vida loka.</p>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src={sobre2} alt="sobre2" /></div>
                </div>
                <br />
                <br />

                <div className="container">
                    <br />
                    <br />
                    <br />
                    <h1 classNameName="container light">Sobre nós</h1>
                    <div classNameName="container light">
                        <div classNameName="ui section">
                            <h5>Visão</h5>
                            <p>Ser considerado Hospital de Referência nas especialidades em que nos propomos a atender.</p>
                            <p>Para estarmos entre os melhores precisamos:<br />
                                I - Manter atendimento de qualidade no dia-a-dia e, assim, aumentar a confiança em nossos serviços;<br />
                                II - Continuar ampliando nossas atividades;<br />
                                III - Manter um sistema constante de auto-availiação;<br />
                                IV - Investir recursos de forma consciente a fim de prover sempre melhorias em prol do paciente;<br />
                                V - Capacitar os funcionários, visando uma maior humanização no atendimento.</p>
                        </div>
                        <div classNameName="divider"></div>
                        <div classNameName="ui section">
                            <h5>Missão</h5>
                            <p>Promover, através de equipes preparadas, atenção humanizada à saúde e soluções eficazes para atender as necessidades de nossos clientes, integrada aos princípios da medicina e dentro de elevados padrões éticos.</p>
                        </div>
                        <div classNameName="divider"></div>
                        <div classNameName="ui section">
                            <h5>Valores</h5>
                            <p>> Trabalho em Equipe <br />
                                > Profissionalismo<br />
                                > Humanização<br />
                                > Ética<br />
                                > Superação</p>
                        </div>
                        <div classNameName="divider"></div>
                        <div classNameName="ui section">
                            <h5>História</h5>
                            <p>Fundada em 20 de outubro de 1995, a CLINICALIFESTYLE DE FORTALEZA LTDA, tem como principal fundamento oferecer aos seus pacientes o que há de mais moderno e eficiente em OFTALMOLOGIA, estendido hoje para as demais especialidades médicas. Atendemos em regime de Day Hospital, com atendimento eletivo de consultas, exames diagnósticos e laboratoriais; cirurgias de pequeno e médio portes. Não só investimos na aquisição de equipamentos médicos de última geração, bem como mantemos uma equipe médica altamente qualificada e atualizada, frequentando e proferindo palestras em congressos no Brasil, mantendo-se associados à Sociedade Brasileira de Oftalmologia e demais Conselhos Brasileiro de Medicina. Nosso intuito é oferecer um serviço diferenciado e personalizado aos nossos clientes de saúde. Temos como meta conjugar os avanços tecnológicos ao preciso diagnóstico médico, de modo a propiciar uma rápida reabilitação dos nossos usuários.
                        </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default AClinica;