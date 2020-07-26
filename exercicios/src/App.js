import React from "react";
import { SafeAreaView } from "react-native";

import CompPadrao, { Comp1, Comp2 } from './components/Multi';
import PrimeiroComp from './components/Primeiro';

/* SafeAreaView != View -> SafeAreaView faz com que os componentes 
fiquem em uma "area segura" (por exemplo, fora do notch do iPhone) */

export default () => (
    <SafeAreaView>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <PrimeiroComp />
    </SafeAreaView>
)