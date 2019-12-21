import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


let largura = Dimensions.get('window').width;
let altura = Dimensions.get('window').height;

class LogoInicialPresentation extends Component {
    render() {
        return(
            <View>
            <Image source={require('../../../images/ImgApresentacao.png')} 
                   style={{width: largura, height: altura, resizeMode: 'cover'}}
            >
            </Image>
        </View>
        );
    }
};

const AppNavigator = createStackNavigator({
    ApresentacaoScreen: {
        screen: LogoInicialPresentation,
    },
});

const Routes = createAppContainer(AppNavigator);

export default class LogoInicialContainer extends Component {
    render() {
        return <Routes />
    }
}