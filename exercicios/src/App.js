import React from "react";
import { Text, SafeAreaView } from "react-native";

import PrimeiroComp from './components/Primeiro';

/* SafeAreaView != View -> SafeAreaView faz com que os componentes 
fiquem em uma "area segura" (por exemplo, fora do notch do iPhone) */

export default () => (
    <SafeAreaView>
        <PrimeiroComp />
    </SafeAreaView>
)