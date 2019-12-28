import React from 'react';
import PerfilUsuarioPresentation from '../Presentation';

const PerfilUsuarioContainer = props => {
    function HandleCriarConta() {
        props.navigation.navigate('AppCriarConta');
    }
    function HandleVoltar() {
        props.navigation.goBack();
    }
    return (
        <PerfilUsuarioPresentation 
            ChamaDadosPessoais={HandleCriarConta}
            ChamaMenu={HandleVoltar} 
        />
    );
};

export default PerfilUsuarioContainer;