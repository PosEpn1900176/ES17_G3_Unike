import React from 'react';
import LoginPresentation from '../Presentation';

const LoginContainer = props => {
    function HandleTenhoConta() {
        props.navigation.navigate('AppTenhoConta');
    }
    function HandleCriarConta() {
        props.navigation.navigate('AppCriarConta');
    }

    return (
        <LoginPresentation ChamaCriarConta={HandleCriarConta} ChamaTenhoConta={HandleTenhoConta}/>
    );
};

export default LoginContainer;