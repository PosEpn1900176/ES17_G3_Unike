import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import estilo from '../../../organisms/templates/style';

//class TenhoContaPresentation extends Component {
const TenhoContaPresentation = props => {
    return (
        <View style={estilo.Container}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Image 
                        source={require('../../../images/logo-unike.png')} 
                        style={{width: 100, height: 35}}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'right', marginTop: 10, marginRight: 10, fontSize: 15}}>Bem Vindo!</Text>                
                </View>
            </View>
            
            <View style={estilo.Fundo}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Entre com seu usuáro e senha</Text>
                        <View style={{borderBottomColor: '#ee2d2d', borderBottomWidth: 1, paddingBottom: 5, width: '100%'}} />
                    </View>
                </View>
                <TextInput 
                    style={estilo.Campo} 
                    placeholder='E-Mail'
                    value={props.email}
                    onChangeText={props.onChange("email")}
                />
                <TextInput 
                    style={estilo.Campo} 
                    placeholder='Senha'
                    value={props.senha}
                    onChangeText={props.onChange("password")}
                />
            </View>

            <View style={estilo.Rodape}>
                <View>
                    <TouchableOpacity style={estilo.BotaoVermelho} onPress={props.ChamaMenu}>
                        <Text style={estilo.TextoBotaoVermelho}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaLogin}>
                        <Text style={estilo.TextoBotaoPadrao}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default TenhoContaPresentation;