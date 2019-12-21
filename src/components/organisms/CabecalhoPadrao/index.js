import React from 'react';
import { View, Text, Image } from 'react-native';

const CabecalhoPadrao = props => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Image 
                    source={require('../../images/logo-unike.png')} 
                    style={{width: 100, height: 35}}
                />
            </View>
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'right', marginTop: 10, marginRight: 10, fontSize: 15}}>Bem Vindo!</Text>                
            </View>
        </View>
    );
};

export default CabecalhoPadrao;