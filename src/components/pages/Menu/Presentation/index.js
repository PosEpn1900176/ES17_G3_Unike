import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import estilo from '../../../organisms/templates/style';
import CabecalhoPadrao from '../../../organisms/CabecalhoPadrao';

const MenuPresentation = props => {
    return(
        /*--> Essa barra de rolagem foi inserida para permitir a visualização de todos os botões quando o celular estiver deitado. */
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <View style={estilo.Container}>

                {/*--> O cabeçalho padrão é um componente para exibir o logotipo da empresa e a mensagem de boas vindas. 
                Se o usuário estiver logado, ele pode ser usado para exibir o nome do profissional no lugar das boas vindas.*/}
                <CabecalhoPadrao />
                
                {/*--> Estilo para exibir uma moldura bege embaixo dos botões. Apenas o botão "sair" fica para fora da moldura. */}
                <View style={estilo.Fundo}>

                    {/*--> Container para exibir o sub-titulo e uma linha logo embaixo */}
                    <View style={estilo.ContainerSubTitulo}>
                        <Text style={estilo.SubTitulo}>Informações do Profissional</Text>
                        <View style={estilo.LinhaSubTitulo} />
                    </View>

                    {/*--> Muda a orientação do grid para exibir as informações do profissional do lado direito da foto */}
                    <View style={estilo.ContainerFoto}>

                        {/*--> Desenha o quadro da foto */}
                        <View style={estilo.Foto}/>

                        {/*--> Coloca cor nos rótulos da foto e gera um pequeno espaçamento entre eles */}
                        <View style={estilo.InfoFoto}>
                            <Text style={estilo.TextoInfoFoto}>Nome:</Text>
                            <Text style={estilo.TextoInfoFoto}>E-Mail:</Text>
                            <Text style={estilo.TextoInfoFoto}>Telefone:</Text>
                            <Text style={estilo.TextoInfoFoto}>Avaliação:</Text>
                        </View>
                    </View>

                    {/*--> Container para exibir centralizado o sub-titulo e uma linha logo embaixo */}
                    <View style={estilo.ContainerSubTitulo}>
                        <Text style={estilo.SubTitulo}>Menu</Text>
                        <View style={estilo.LinhaSubTitulo} />
                    </View>
                    
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaServicosDisponiveis}>
                        <Text style={estilo.TextoBotaoPadrao}>Serviços Disponíveis</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaServicosAgendados}>
                        <Text style={estilo.TextoBotaoPadrao}>Serviços Agendados</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaServicosRealizados}>
                        <Text style={estilo.TextoBotaoPadrao}>Serviços Realizados</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaPerfilUsuario}>
                        <Text style={estilo.TextoBotaoPadrao}>Perfil do Usuário</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaAjuda}>
                        <Text style={estilo.TextoBotaoPadrao}>Ajuda</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={estilo.Rodape}>
                    <TouchableOpacity style={estilo.BotaoPadrao} onPress={props.ChamaLogin}>
                        <Text style={estilo.TextoBotaoPadrao}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default MenuPresentation;