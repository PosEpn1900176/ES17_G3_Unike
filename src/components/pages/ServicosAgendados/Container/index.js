import React from 'react';
import ServicosAgendadosPresentation from '../Presentation';

import { Alert } from 'react-native';

const ServicosAgendadosContainer = props => {
    function HandleDetalheServicoAgendado() {
        Alert.alert('Chama os detalhes do Serviço agendado.');
    }
    function HandleVoltar() {
        props.navigation.goBack();
    }
    return(
        <ServicosAgendadosPresentation 
            ChamaDetalheServicoAgendado={HandleDetalheServicoAgendado}
            ChamaMenu={HandleVoltar}
        />
    );
}

export default ServicosAgendadosContainer;