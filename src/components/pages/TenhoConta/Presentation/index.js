import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import temaPadrao from '../../../organisms/templates/Theme';

//class TenhoContaPresentation extends Component {
const TenhoContaPresentation = props => {
    return (
        <View style={temaPadrao.Container}>
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
            
            <View style={temaPadrao.Fundo}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Entre com seu usuáro e senha</Text>
                        <View style={{borderBottomColor: '#ee2d2d', borderBottomWidth: 1, paddingBottom: 5, width: '100%'}} />
                    </View>
                </View>
                <TextInput 
                    style={temaPadrao.Campo} 
                    placeholder='E-Mail'
                    value={props.email}
                    onChangeText={props.onChange("email")}
                />
                <TextInput 
                    style={temaPadrao.Campo} 
                    placeholder='Senha'
                    value={props.senha}
                    onChangeText={props.onChange("password")}
                />
            </View>

            <View style={temaPadrao.Rodape}>
                <View>
                    <TouchableOpacity style={temaPadrao.BotaoVermelho} onPress={props.ChamaMenu}>
                        <Text style={temaPadrao.TextoBotaoVermelho}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={temaPadrao.BotaoPadrao} onPress={props.ChamaLogin}>
                        <Text style={temaPadrao.TextoBotaoPadrao}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default TenhoContaPresentation;