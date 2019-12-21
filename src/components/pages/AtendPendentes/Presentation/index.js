import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    Fundo: {
        backgroundColor: 'white',
    },
    Container: {
        margin: 20,
        borderStyle: 'solid',
        borderColor: 'blue',
        backgroundColor: 'black',
    },
    Texto: {
        color: 'white',
    },
});

const AtendPendentesPresentation = props => {
    return (
        <View style={estilos.Container}>
            <Text style={estilos.Texto}>Teste</Text>
        </View>
    );
};

export default AtendPendentesPresentation;
