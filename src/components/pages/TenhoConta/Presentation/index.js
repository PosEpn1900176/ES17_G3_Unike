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
                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15}}>
                    <View style={{flex: 1, alignContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Text style={{color: '#ee2d2d'}}>-----------------|</Text>
                    </View>
                    <View style={{flex: 3, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Entre com seu usuáro e senha</Text>
                    </View>
                    <View style={{flex: 1, alignContent: 'flex-end', alignItems: 'flex-end'}}>
                        <Text style={{color: '#ee2d2d'}}>|-----------------</Text>
                    </View>
                </View>
                <TextInput 
                    style={temaPadrao.Campo} 
                    placeholder='E-Mail'
                    value={props.email}
                    //onChangeText={props.value}
                    //value={this.props.email}
                    //value={this.state.email}
                    //onChangeText={email => this.setState({email})}
                />
                <TextInput 
                    style={temaPadrao.Campo} 
                    placeholder='Senha'
                    value={props.senha}
                    //onChangeText={props.value}
                    //value={this.props.senha}
                    //value={this.state.senha}
                    //onChangeText={senha => this.setState({senha})}
                    
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