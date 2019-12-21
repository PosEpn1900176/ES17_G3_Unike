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
                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15}}>
                    <View style={{flex: 1, alignContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Text style={{color: '#ee2d2d'}}>-----------------------------|</Text>
                    </View>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Dados de Contato</Text>
                    </View>
                    <View style={{flex: 1, alignContent: 'flex-end', alignItems: 'flex-end'}}>
                        <Text style={{color: '#ee2d2d'}}>|-----------------------------</Text>
                    </View>
                </View>
                <TextInput style={temaPadrao.Campo} placeholder='E-Mail'></TextInput>
                <TextInput style={temaPadrao.Campo} placeholder='DDD'></TextInput>
                <TextInput style={[temaPadrao.Campo, {marginBottom: 15}]} placeholder='Telefone Celular'></TextInput>
            </View>

            <View style={temaPadrao.Fundo}>
                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15}}>
                    <View style={{flex: 1, alignContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Text style={{color: '#ee2d2d'}}>----------------------------|</Text>
                    </View>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Dados Pessoais</Text>
                    </View>
                    <View style={{flex: 1, alignContent: 'flex-end', alignItems: 'flex-end'}}>
                        <Text style={{color: '#ee2d2d'}}>|-----------------------------</Text>
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