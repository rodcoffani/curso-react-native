import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo'

const Comp = () => {
    return <Text style={Estilo.fontG}>Comp Oficial</Text>
}

const Comp1 = () => {
    return <Text style={Estilo.fontG}>Comp #01</Text>
}

const Comp2 = () => {
    return <Text style={Estilo.fontG}>Comp #02</Text>
}

export { Comp1, Comp2 };
export default Comp;