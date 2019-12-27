//--> Bibliotecas do React Native.
import React, { Component } from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//--> Importação das páginas para criar a navegação.
import { Splash, Login, TenhoConta, Menu, CriarConta } from '../../pages';

/*
import LogoInicialContainer from '../../pages/LogoInicial/Container';
import LoginContainer from '../../pages/Login/Container';
import TenhoContaContainer from '../../pages/TenhoConta/Container';
import CriarContaContainer from '../../pages/CriarConta/Container';

const AppNavigator = createStackNavigator({
    AppSplash: {
        screen: LogoInicialContainer,
    },
    AppLogin: {
        screen: LoginContainer,
    },
    AppTenhoConta: {
        screen: TenhoContaContainer,
    },
    AppCriarConta: {
        screen: CriarContaContainer,
    },
},
{
    initialRouteName: 'AppCriarConta',
});
*/

const AppNavigator = createStackNavigator({
    AppSplash: {
        screen: Splash,
        navigationOptions: {
            header: null,
        },
    },
    AppLogin: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    AppTenhoConta: {
        screen: TenhoConta,
        navigationOptions: {
            header: null,
        },
    },
    AppMenu: {
        screen: Menu,
        navigationOptions: {
            header: null,
        },
    },
    AppCriarConta: {
        screen: CriarConta,
        navigationOptions: {
            header: null,
        },
    },
},
{
    initialRouteName: 'AppLogin',
});

const Routes = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return <Routes />
    }
}
