import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';

class Spinner extends React.Component {


    componentDidMount() {
        document.querySelector('.App-logo').addEventListener('animationend', (e) => {
                                //console.log("animation finished");
                                e.target.classList.remove("anim")});
    
    }



    render() {
        return (
            <img src={logo} className="App-logo" alt="logo" />  
        );
    }
}

export default Spinner;