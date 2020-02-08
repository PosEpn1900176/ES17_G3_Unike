import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between'
    },
    ContainerSubTitulo: {
        flex: 1, 
        alignContent: 'center', 
        alignItems: 'center',
        marginBottom: 10
    },
    SubTitulo: {
        color: '#ee2d2d', 
        fontWeight: 'bold',
    },
    LinhaSubTitulo: {
        borderBottomColor: '#ee2d2d', 
        borderBottomWidth: 1, 
        paddingBottom: 5, 
        width: '100%'
    },
    Fundo: {
        flex: 4,
        margin: 10,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        backgroundColor: '#ebe4d4',
        borderRadius: 10
    },
    Rodape: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 10,
        marginRight: 10,
    },
    ContainerFoto: {
        flexDirection: 'row', 
    },
    Foto: {
        width: 90,
        height: 120,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ee2d2d'
    },
    InfoFoto: {
        marginLeft: 15,
        paddingTop: 10,
    },
    TextoInfoFoto: {
        color: '#ee2d2d',
        paddingBottom: 5
    },
    FotoRedonda: {
        marginTop: 25,
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ee2d2d',
        borderRadius: 90
    },
    BotaoVermelho: {
        marginBottom: 10,
        justifyContent: 'center',
        fontSize: 20,
        color: '#000000',
        backgroundColor: '#8e1414',
        borderColor: '#ee2d2d',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 50,
        shadowColor: '#000000',
        shadowOffset: {width: 2, height: 1},
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        elevation: 3
    },
    BotaoPadrao: {
        marginBottom: 10,
        justifyContent: 'center',        
        fontSize: 20,
        color: '#ff0000',
        backgroundColor: '#f6e9e9',
        borderColor: '#ee2d2d',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 50,
        shadowColor: '#000000',
        shadowOffset: {width: 2, height: 1},
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        elevation: 3
    },
    TextoBotaoVermelho: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold'
    },    
    TextoBotaoPadrao: {
        color: '#ee2d2d',
        textAlign: 'center',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    Campo: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ee2d2d',
        backgroundColor: '#ffffff',
        marginTop: 10,
        paddingLeft: 15
    },
});

export default style;
