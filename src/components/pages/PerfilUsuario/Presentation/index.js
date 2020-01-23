import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import temaPadrao from '../../../organisms/templates/Theme';
import CabecalhoPadrao from '../../../organisms/CabecalhoPadrao';

const PerfilUsuarioPresentation = props => {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <View style={temaPadrao.Container}>
                <CabecalhoPadrao></CabecalhoPadrao>

                <View style={temaPadrao.Fundo}>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15}}>
                        <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Perfil do Usuário</Text>
                            <View style={{borderBottomColor: '#ee2d2d', borderBottomWidth: 1, paddingBottom: 5, width: '100%'}} />
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15, marginBottom: 50}}>
                        <View style={temaPadrao.FotoRedonda}/>
                        <View style={{marginLeft: 15}}>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Nome:</Text>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Telefone:</Text>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Endereço:</Text>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Número:</Text>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Bairro:</Text>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao}>
                            <Text style={temaPadrao.TextoBotaoPadrao} onPress={props.ChamaDadosPessoais}>Alterar Dados Pessoais</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao}>
                            <Text style={temaPadrao.TextoBotaoPadrao} onPress={props.ChamaDadosServico}>Alterar Dados de Serviço</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={temaPadrao.Rodape}>
                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao}>
                            <Text style={temaPadrao.TextoBotaoPadrao} onPress={props.ChamaMenu}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>    
            </View>
            
        </ScrollView>
    );
};

export default PerfilUsuarioPresentation;

/*
const PerfilUsuarioPresentation = props => {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <View style={temaPadrao.Container}>
                <CabecalhoPadrao></CabecalhoPadrao>

                <View style={temaPadrao.FundoMaior}>
                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15}}>
                        <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Perfil do Usuário</Text>
                            <View style={{borderBottomColor: '#ee2d2d', borderBottomWidth: 1, paddingBottom: 5, width: '100%'}} />
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15, marginBottom: 50}}>
                        <View style={temaPadrao.FotoRedonda}/>
                        <View style={{marginLeft: 15}}>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Nome:</Text>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Telefone:</Text>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Endereço:</Text>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Número:</Text>
                            <Text style={{color: '#ee2d2d', marginBottom: 15}}>Bairro:</Text>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao}>
                            <Text style={temaPadrao.TextoBotaoPadrao} onPress={props.ChamaDadosPessoais}>Alterar Dados Pessoais</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao}>
                            <Text style={temaPadrao.TextoBotaoPadrao} onPress={props.ChamaDadosServico}>Alterar Dados de Serviço</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={temaPadrao.Rodape}>
                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao}>
                            <Text style={temaPadrao.TextoBotaoPadrao} onPress={props.ChamaMenu}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
*/