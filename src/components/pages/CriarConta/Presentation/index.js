import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import estilo from '../../../organisms/templates/style';
import CabecalhoPadrao from '../../../organisms/CabecalhoPadrao';

const CriarContaPresentation = props => {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={estilo.Container}>
            <CabecalhoPadrao></CabecalhoPadrao>
            
            <View style={estilo.Fundo}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Dados de Contato</Text>
                        <View style={{borderBottomColor: '#ee2d2d', borderBottomWidth: 1, paddingBottom: 5, width: '100%'}} />
                    </View>
                </View>
                <TextInput style={estilo.Campo} placeholder='E-Mail'></TextInput>
                <TextInput style={estilo.Campo} placeholder='DDD'></TextInput>
                <TextInput style={[estilo.Campo, {marginBottom: 15}]} placeholder='Telefone Celular'></TextInput>
            </View>

            <View style={estilo.Fundo}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Dados Pessoais</Text>
                        <View style={{borderBottomColor: '#ee2d2d', borderBottomWidth: 1, paddingBottom: 5, width: '100%'}} />
                    </View>
                </View>
                <TextInput style={estilo.Campo} placeholder='Nome'></TextInput>
                <TextInput style={estilo.Campo} placeholder='Sobrenome'></TextInput>
                <TextInput style={estilo.Campo} placeholder='Data de Nascimento'></TextInput>
                <TextInput style={estilo.Campo} placeholder='RG'></TextInput>
                <TextInput style={[estilo.Campo, {marginBottom: 15}]} placeholder='CPF'></TextInput>
            </View>
            

            <View style={estilo.Rodape}>
                <View>
                    <TouchableOpacity style={estilo.BotaoVermelho}>
                        <Text style={estilo.TextoBotaoVermelho}>Avançar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={estilo.BotaoPadrao}>
                        <Text style={estilo.TextoBotaoPadrao} onPress={props.ChamaLogin}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
    );
};

export default CriarContaPresentation;