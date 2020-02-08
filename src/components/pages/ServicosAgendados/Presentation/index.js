import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SectionList } from 'react-native';

import estilo from '../../../organisms/templates/style';
import CabecalhoPadrao from '../../../organisms/CabecalhoPadrao';

import DadosLista from '../Container/data';

const ServicosAgendadosPresentation = props => {
    return(
        <View style={estilo.Container}>
            <CabecalhoPadrao />
            <View style={estilo.FundoMaior}>
                <View style={{backgroundColor: "#ffffff", margin: 10}}>
                    <SectionList
                        sections={DadosLista}
                        renderSectionHeader={({ section }) => (
                            <View style={{marginLeft: 10, marginTop: 10, marginBottom: 5}}>
                                <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>{section.title}</Text>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <View>
                                <View style={{flex: 1, flexDirection: 'row', marginLeft: 20, marginRight: 10}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', marginBottom: 5}}>
                                        <Text>{item.Cliente}</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <Text>{item.Servico}</Text>
                                    </View>    
                                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                                        <Text>{item.Horario}</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: '#000000', marginLeft: 10, marginRight: 10, height: 1}} />
                            </View>
                        )} 
                        keyExtractor={( item ) => item.Cliente}
                    />
                </View>
            </View>

            <View style={estilo.Rodape}>
                <View>
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaMenu}>
                        <Text style={estilo.TextoBotaoPadrao}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ServicosAgendadosPresentation;