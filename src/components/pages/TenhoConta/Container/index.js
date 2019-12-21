import React from 'react';
import TenhoContaPresentation from '../Presentation';

import { Alert } from 'react-native';

const TenhoContaContainer = props => {
    function HandleMenu() {
        //--> Usa o usuário e senha para se conectar na API e autenticar o profissional
        //let retornoTexto = "E-Mail: " + props.navigation.getParam('email') + ", Senha: " + props.navigation.getParam('senha');
        let texto = 'Autentica usuário e chama a tela de menu.'
        Alert.alert(texto);
    }
    function HandleVoltar() {
        props.navigation.navigate('AppLogin');
    }
    return (
        <TenhoContaPresentation 
            ChamaTelaMenu={HandleMenu} 
            ChamaLogin={HandleVoltar}
        />
    );
};

export default TenhoContaContainer;