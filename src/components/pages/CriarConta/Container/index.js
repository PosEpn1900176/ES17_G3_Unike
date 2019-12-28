import React from 'react';
import { Alert } from 'react-native';

import CriarContaPresentation from '../Presentation';

const CriarContaContainer = props => {
    function HandleLogin() {
        //Alert.alert('Teste');
        //props.navigation.navigate('AppLogin');
        props.navigation.goBack();
    }
    return (
        <CriarContaPresentation ChamaLogin={HandleLogin}/>
    );
};

export default CriarContaContainer;