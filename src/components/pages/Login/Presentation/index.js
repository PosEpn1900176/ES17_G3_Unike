import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import estilo from '../../../organisms/templates/style';

const LoginPresentation = props => {
    let { largura, altura } = Math.round(Dimensions.get('screen'));
    return (
        <View style={estilo.Container}>
            <View style={estilo.Fundo}>
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
                <View style={{marginTop: 5, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10, marginBottom: 10, fontSize: 17}}>
                        Bem vindo ao App do Profissional!
                    </Text>
                    <Text style={{textAlign: 'center', marginLeft: 30, marginRight: 30, marginBottom: 10}}>
                        Receba e selecione os serviços que deseja, criando assim a sua própria agenda.
                    </Text>
                </View>
            </View>
            <View style={estilo.Rodape}>
                <View>
                    <TouchableOpacity style={estilo.BotaoVermelho} onPress={props.ChamaTenhoConta}>
                        <Text style={estilo.TextoBotaoVermelho}>Tenho uma Conta</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaCriarConta}>
                        <Text style={estilo.TextoBotaoPadrao}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginPresentation;