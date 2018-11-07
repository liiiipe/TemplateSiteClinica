import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from 'firebase';

import Navbar from './Componentes/Navbar';

import Home from './Componentes/1.Home/Home';
import AClinica from './Componentes/2.AClinica/AClinica';
import Servicos from './Componentes/3.Servicos/Servicos';
import Consulta from './Componentes/4.Consulta/Consulta';
import LoginPaciente from './Componentes/4.Consulta/LoginPaciente';
import CadastroPaciente from './Componentes/4.Consulta/CadastroPaciente';
import ConsultaPaciente from './Componentes/4.Consulta/ConsultaPaciente';

import Footer from './Componentes/Footer';




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/sobrenos' component={AClinica} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/consultas' component={Consulta} />
          <Route path='/LoginPaciente' component={LoginPaciente} />
          <Route path='/CadastroPaciente' component={CadastroPaciente} />
          <Route path='/ConsultaPaciente' component={ConsultaPaciente} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
