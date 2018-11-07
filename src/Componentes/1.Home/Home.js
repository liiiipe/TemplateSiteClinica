import React from 'react';

import foto1 from './fotoclnica.jpg'
import foto2 from './hemodialisis.jpg'

const Home = (props) => {
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax"><img src={foto2} alt="img2" /></div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h1 className="header center light" >Clínica Life Style</h1>
                    <p className="grey-text text-darken-3 lighten-3 center">Onde você e sua família vão se sentir vida loka.</p>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src={foto1} alt="img1" /></div>
            </div>
            <br />
            <br />
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center light">
                                    <i className="large material-icons">favorite</i>
                                </h2>
                                <h5 className="center">Mais saúde para sua família</h5>
                                <p className="light">Para você ou para a sua família, a Clínica LifeStyle é acessível para todos a qualquer momento da vida.</p>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center light">
                                    <i className="large material-icons">local_hospital</i>
                                </h2>
                                <h5 className="center">Sempre pensando em seu bem-estar</h5>
                                <p className="light">Com estrutura de ponta e profissionais qualificados, a Clinica LifeStyle está pronta para atender você.</p>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center light">
                                    <i className="large material-icons">phone_iphone</i>
                                </h2>
                                <h5 className="center">24hrs com você</h5>
                                <p className="light">Agende suas consultas ou exames  sem precisar sair de casa. Além disso, você pode acompanhar seja no seu smartphone ou computador 24h por dia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
            <div className="row">
                <div className="col s12 center z-depth-1">
                    <i className="iconehome medium material-icons">favorite_border</i><p>Para você ou para a sua família, a Clinica Lifestyle é acessível para todos a qualquer momento da vida.</p>
                </div>
                <div className="col s12 center z-depth-1">
                    <i className="iconehome medium material-icons">local_convenience_store</i><p>Com estrutura de ponta e profissionais qualificados, a Clinica Lifestyle está pronta para atender você.</p>
                </div>
                <div className="col s12 center z-depth-1">
                    <i className="iconehome medium material-icons">child_care</i><p>Agende suas consultas ou exames sem precisar sair de casa. Além disso, você pode acompanhar seja no seu smartphone ou computador 24h por dia.</p>
                </div>
                <div className="col s12 center z-depth-1">
                    <i className="iconehome medium material-icons">phone_android</i><p>Acesse nosso app Doc.ctor  para marcar consultas pelo celular onde quer que esteja.</p>
                </div>
            </div>
            

        </div>
    )
}

export default Home;