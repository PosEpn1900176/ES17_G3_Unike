import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import temaPadrao from '../../../organisms/templates/Theme';
import CabecalhoPadrao from '../../../organisms/CabecalhoPadrao';

const MenuPresentation = props => {
    return(
        <View style={temaPadrao.Container}>
            <CabecalhoPadrao />
            <View style={temaPadrao.FundoMaior}>
                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15}}>
                    <View style={{flex: 1, alignContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Text style={{color: '#ee2d2d'}}>------------------|</Text>
                    </View>
                    <View style={{flex: 3, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Informações do Profissional</Text>
                    </View>
                    <View style={{flex: 1, alignContent: 'flex-end', alignItems: 'flex-end'}}>
                        <Text style={{color: '#ee2d2d'}}>|------------------</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15}}>
                    <View style={temaPadrao.Foto}/>
                    <View style={{marginLeft: 15}}>
                        <Text style={{color: '#ee2d2d'}}>Nome:</Text>
                        <Text style={{color: '#ee2d2d'}}>E-Mail:</Text>
                        <Text style={{color: '#ee2d2d'}}>Telefone:</Text>
                        <Text style={{color: '#ee2d2d', marginTop: 15}}>Avaliação:</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, marginRight: 15}}>
                    <View style={{flex: 2, alignContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Text style={{color: '#ee2d2d'}}>-------------------------------------|</Text>
                    </View>
                    <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#ee2d2d', fontWeight: 'bold'}}>Menu</Text>
                    </View>
                    <View style={{flex: 2, alignContent: 'flex-end', alignItems: 'flex-end'}}>
                        <Text style={{color: '#ee2d2d'}}>|-------------------------------------</Text>
                    </View>
                </View>

                <View style={{marginTop: 10}}>
                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao} onPress={props.ChamaServicosDisponiveis}>
                            <Text style={temaPadrao.TextoBotaoPadrao}>Serviços Disponíveis</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao} onPress={props.ChamaServicosAgendados}>
                            <Text style={temaPadrao.TextoBotaoPadrao}>Serviços Agendados</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao} onPress={props.ChamaServicosRealizados}>
                            <Text style={temaPadrao.TextoBotaoPadrao}>Serviços Realizados</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao} onPress={props.ChamaPerfilUsuario}>
                            <Text style={temaPadrao.TextoBotaoPadrao}>Perfil do Usuário</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={temaPadrao.BotaoPadrao} onPress={props.ChamaAjuda}>
                            <Text style={temaPadrao.TextoBotaoPadrao}>Ajuda</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={temaPadrao.Rodape}>
                <View>
                    <TouchableOpacity style={temaPadrao.BotaoPadrao} onPress={props.ChamaLogin}>
                        <Text style={temaPadrao.TextoBotaoPadrao}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default MenuPresentation;