import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import temaPadrao from '../../../organisms/templates/Theme';
import CabecalhoPadrao from '../../../organisms/CabecalhoPadrao';

const CriarContaPresentation = props => {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={temaPadrao.Container}>
            <CabecalhoPadrao></CabecalhoPadrao>
            
            <View style={temaPadrao.Fundo}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Dados de Contato</Text>
                        <View style={{borderBottomColor: '#ee2d2d', borderBottomWidth: 1, paddingBottom: 5, width: '100%'}} />
                    </View>
                </View>
                <TextInput style={temaPadrao.Campo} placeholder='E-Mail'></TextInput>
                <TextInput style={temaPadrao.Campo} placeholder='DDD'></TextInput>
                <TextInput style={[temaPadrao.Campo, {marginBottom: 15}]} placeholder='Telefone Celular'></TextInput>
            </View>

            <View style={temaPadrao.Fundo}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Dados Pessoais</Text>
                        <View style={{borderBottomColor: '#ee2d2d', borderBottomWidth: 1, paddingBottom: 5, width: '100%'}} />
                    </View>
                </View>
                <TextInput style={temaPadrao.Campo} placeholder='Nome'></TextInput>
                <TextInput style={temaPadrao.Campo} placeholder='Sobrenome'></TextInput>
                <TextInput style={temaPadrao.Campo} placeholder='Data de Nascimento'></TextInput>
                <TextInput style={temaPadrao.Campo} placeholder='RG'></TextInput>
                <TextInput style={[temaPadrao.Campo, {marginBottom: 15}]} placeholder='CPF'></TextInput>
            </View>
            

            <View style={temaPadrao.Rodape}>
                <View>
                    <TouchableOpacity style={temaPadrao.BotaoVermelho}>
                        <Text style={temaPadrao.TextoBotaoVermelho}>Avançar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={temaPadrao.BotaoPadrao}>
                        <Text style={temaPadrao.TextoBotaoPadrao} onPress={props.ChamaLogin}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
    );
};

export default CriarContaPresentation;