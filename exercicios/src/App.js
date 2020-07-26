import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';

import MinMax from './components/MinMax';
import CompPadrao, { Comp1, Comp2 } from './components/Multi';
import PrimeiroComp from './components/Primeiro';

/* SafeAreaView != View -> SafeAreaView faz com que os componentes 
fiquem em uma "area segura" (por exemplo, fora do notch do iPhone) */

export default () => (
    <SafeAreaView style={Style.App}>
        <MinMax min={3} max={20} />
        <MinMax min={1} max={15} />
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 /> */}
        {/* <PrimeiroComp /> */}
    </SafeAreaView>
)

const Style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
})