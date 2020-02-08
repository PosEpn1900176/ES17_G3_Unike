import React from 'react';
import { View, Text, Image } from 'react-native';

import estilo from './style';

const CabecalhoPadrao = props => {
    return (
        <View style={estilo.DirecaoContainer}>
            <View style={estilo.Container}>
                <Image 
                    source={require('../../images/logo-unike.png')} 
                    style={estilo.TamanhoLogo}
                />
            </View>
            <View style={estilo.Container}>
                <Text style={estilo.Texto}>Bem Vindo!</Text>                
            </View>
        </View>
    );
};

export default CabecalhoPadrao;