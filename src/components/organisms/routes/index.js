//--> Bibliotecas do React Native.
import React, { Component } from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//--> Importação das páginas para criar a navegação.
import { Splash, Login, TenhoConta, Menu, ServicosAgendados, PerfilUsuario, CriarConta } from '../../pages';

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
    AppServicosAgendados: {
        screen: ServicosAgendados,
        navigationOptions: {
            header: null,
        },
    },
    AppPerfilUsuario: {
        screen: PerfilUsuario,
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
