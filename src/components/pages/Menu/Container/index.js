import React from 'react';
import { Alert } from 'react-native';
import MenuPresentation from '../Presentation';

const MenuContainer = props => {
    function HandleServicosDisponiveis() {
        Alert.alert("Tela em contrução");
    }
    function HandleServicosAgendados() {
        Alert.alert('Tela em contrução');
    }
    function HandleServicosRealizados() {
        Alert.alert('Tela em contrução');
    }
    function HandlePerfilUsuario() {
        Alert.alert('Tela em contrução');
    }
    function HandleAjuda() {
        Alert.alert('Tela em contrução');
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