import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './appTheme'
import { ButtonCalc } from '../components/ButtonCalc'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calcContainer}>
        <Text style={styles.littleResult}> 1,500.00</Text>
        <Text style={styles.result}> 1,500.00</Text>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='C' color='#9B9B9B'/>
           <ButtonCalc  text='+/-' color='#9B9B9B'/>
           <ButtonCalc  text='del' color='#9B9B9B'/>
           <ButtonCalc  text='/' color='#FF9427'/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='7' />
           <ButtonCalc  text='8' />
           <ButtonCalc  text='9' />
           <ButtonCalc  text='x' color='#FF9427'/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='6' />
           <ButtonCalc  text='4' />
           <ButtonCalc  text='5' />
           <ButtonCalc  text='-' color='#FF9427'/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='1' />
           <ButtonCalc  text='2' />
           <ButtonCalc  text='3' />
           <ButtonCalc  text='+' color='#FF9427'/>    
        </View>
            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='0' zeroButton={true} />
           <ButtonCalc  text='.' />
           <ButtonCalc  text='=' color='#FF9427'/>    
        </View>
    </View>
  )
};

