import React, {Component} from 'react';
import firebase from 'firebase';

class Logout extends Component {
    FuncLogout = () => {
        firebase.auth().signOut().then(function(){
            console.log("saiu");
            window.location.reload();
        });
    }

    render(){
        return(
            <a className="waves-effect waves-light btn orange" onClick={this.FuncLogout}>Logout</a>
        )
    }
}

export default Logout;