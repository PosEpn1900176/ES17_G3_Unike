import React from 'react';
import { Alert } from 'react-native';
import MenuPresentation from '../Presentation';

const MenuContainer = props => {
    function HandleServicosDisponiveis() {
        Alert.alert("Tela AppServicosDisponiveis em contrução");
    }
    function HandleServicosAgendados() {
        props.navigation.navigate('AppServicosAgendados');
    }
    function HandleServicosRealizados() {
        Alert.alert('Tela AppServicosRealizados em contrução');
    }
    function HandlePerfilUsuario() {
        props.navigation.navigate('AppPerfilUsuario');
    }
    function HandleAjuda() {
        Alert.alert('Tela AppAjuda em contrução');
    }
    function HandleLogin() {
        props.navigation.navigate('AppLogin');
    }
    return <MenuPresentation 
        ChamaServicosDisponiveis={HandleServicosDisponiveis}
        ChamaServicosAgendados={HandleServicosAgendados}
        ChamaServicosRealizados={HandleServicosRealizados}
        ChamaPerfilUsuario={HandlePerfilUsuario}
        ChamaAjuda={HandleAjuda}
        ChamaLogin={HandleLogin}
    />
}

export default MenuContainer;