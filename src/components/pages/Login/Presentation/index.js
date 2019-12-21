import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import temaPadrao from '../../../organisms/templates/Theme';

const LoginPresentation = props => {
    let { largura, altura } = Math.round(Dimensions.get('screen'));
    return (
        <View style={temaPadrao.Container}>
            <View style={temaPadrao.Fundo}>
                <View>
                    <Image 
                        source={require('../../../images/logo-unike.png')} 
                        style={{width: 300, height: 100, marginLeft: 45}}
                    />
                </View>
                <View>
                    <Image 
                        source={require('../../../images/ImgLogin.jpg')} 
                        style={{width: largura, height: 300, resizeMode: 'cover', marginLeft: 20, marginRight: 20}}
                    />
                </View>
                <View style={{marginTop: 10, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 15, marginBottom: 15, fontSize: 17}}>
                        Bem vindo ao App do Profissional!
                    </Text>
                    <Text style={{textAlign: 'center', marginLeft: 30, marginRight: 30, marginBottom: 10}}>
                        Receba e selecione os serviços que deseja, criando assim a sua própria agenda.
                    </Text>
                </View>
            </View>
            <View style={temaPadrao.Rodape}>
                <View>
                    <TouchableOpacity style={temaPadrao.BotaoVermelho} onPress={props.ChamaTenhoConta}>
                        <Text style={temaPadrao.TextoBotaoVermelho}>Tenho uma Conta</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={temaPadrao.BotaoPadrao} onPress={props.ChamaCriarConta}>
                        <Text style={temaPadrao.TextoBotaoPadrao}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginPresentation;