import React from 'react';
import TenhoContaPresentation from '../Presentation';

import { Alert } from 'react-native';

const TenhoContaContainer = props => {
    function HandleMenu() {
        //--> Usa o usuário e senha para se conectar na API e autenticar o profissional
        //let texto = "E-Mail: " + props.email + ", Senha: " + props.senha
        //let texto = 'Autentica usuário e chama a tela de menu.'
        //Alert.alert(texto);
        props.navigation.navigate('AppMenu');
    }
    function HandleVoltar() {
        props.navigation.navigate('AppLogin');
    }
    return (
        <TenhoContaPresentation 
            ChamaMenu={HandleMenu} 
            ChamaLogin={HandleVoltar}
        />
    );
};

export default TenhoContaContainer;