import React, { useState } from 'react';
import TenhoContaPresentation from '../Presentation';

const valorInicial = {
    email: "",
    senha: ""
}

const TenhoContaContainer = props => {
    const [form, setForm] = useState(valorInicial);

    function HandleMenu() {
        //--> Usa o usuário e senha para se conectar na API e autenticar o profissional
        //let texto = "E-Mail: " + props.email + ", Senha: " + props.senha
        //let texto = 'Autentica usuário e chama a tela de menu.'
        //Alert.alert(texto);
        props.navigation.navigate('AppMenu');
    }
    function HandleVoltar() {
        props.navigation.navigate('AppLogin');
    }
    function HandleOnChange(field) {
        /*
        return (form) => {
            if (field == 'email') {
                form.email = field.value;
            } else if (field == 'senha') {
                form.senha = field.senha;
            }
        }
        */
        return (value) => {console.log(field, value)}
    }
    
    return (
        <TenhoContaPresentation 
            ChamaMenu={HandleMenu} 
            ChamaLogin={HandleVoltar}
            onChange={HandleOnChange}
        />
    );
};

export default TenhoContaContainer;