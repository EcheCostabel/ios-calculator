import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './appTheme'
import { ButtonCalc } from '../components/ButtonCalc'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calcContainer}>
        <Text style={styles.littleResult}> 1,500.00</Text>
        <Text style={styles.result}> 1,500.00</Text>

        <View style={styles.row}>
           <ButtonCalc  texto='C' color='#9B9B9B'/>
           <ButtonCalc  texto='+/-' color='#9B9B9B'/>
           <ButtonCalc  texto='del' color='#9B9B9B'/>
           <ButtonCalc  texto='/' color='#FF9427'/>    
        </View>
    </View>
  )
};

