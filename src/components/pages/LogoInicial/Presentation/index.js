import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const LogoInicialPresentation = props => {
    let largura = Dimensions.get('window').width;
    let altura = Dimensions.get('window').height;
    return (
        <View>
            <Image source={require('../../../images/ImgApresentacao.png')} 
                   style={{width: largura, height: altura, resizeMode: 'cover'}}
            >
            </Image>
        </View>
    );
};

export default LogoInicialPresentation;