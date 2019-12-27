import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, SafeAreaView, Alert} from 'react-native';

const estilos = StyleSheet.create({
  Body: {
    backgroundColor: '#ffffff',
  },
  Container: {
    backgroundColor: '#fcfcfc',
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
  },
  Titulo: {
    fontSize: 15,
    color: '#ff0000',
  },
  Botao: {
    paddingTop: 7,
    paddingLeft: 30,
    fontSize: 20,
    color: '#ff0000',
    backgroundColor: '#f6e9e9',
    borderColor: '#ee2d2d',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
  },
});

const Menu = props => {
  return (
    <SafeAreaView>
      <View style={estilos.Body}>
        <View style={estilos.Container}>
          <TouchableOpacity style={estilos.Botao} onPress={props.ServicosDisponiveis}>
            <Text style={estilos.Titulo}>Serviços Disponíveis</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.Container}>
          <TouchableOpacity style={estilos.Botao} onPress={props.ServicosAgendados}>
            <Text style={estilos.Titulo}>Serviços Agendados</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.Container}>
          <TouchableOpacity style={estilos.Botao} onPress={props.ServicosRealizados}>
            <Text style={estilos.Titulo}>Serviços Realizados</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.Container}>
          <TouchableOpacity style={estilos.Botao} onPress={props.PerfilUsuario}>
            <Text style={estilos.Titulo}>Perfil do Usuário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

function handleServicosDisponiveis() {
  props.navigation.navigate('')
}

function handleServicosAgendados() {
  Alert.alert("Testando");
}

const MenuContainer = () => {
  return <Menu 
    ServicosDisponiveis={handleServicosDisponiveis}
    ServicosAgendados={handleServicosAgendados}
  ></Menu>
};

export default MenuContainer;
