import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <footer className="page-footer #00bfa5 teal accent-4">
                <div className="container ">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Fortaleza, Ceará</h5>
                            <div>
                                <i className="icones small material-icons">call</i>
                                <p className="info grey-text text-lighten-3">(85) 98643-3974</p>
                            </div>
                            <div>
                                <i className="icones small material-icons">email</i>
                                <p className="info grey-text text-lighten-3">clinicalifestyle@vidaloka.com</p>
                            </div>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Notícias - Blog</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Medicina</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Mercado Farmacêutico</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Novas vacinas</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Dia do Médico</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2018 Todos os direitos reservados.
                    <a className="grey-text text-lighten-4 right" href="#!">Blog Vida Loka</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;