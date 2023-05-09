import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { styles } from './appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalc } from '../hooks/useCalc';



export const CalculatorScreen = () => {


    const { 
        prevNumber,
         number, 
         clean,
         positiveNegative,
         btnDelete,
         dividirButton,
         displayNumbers,
         multiplicarButton,
         sumarButton,
         restarButton,
         operation
        } = useCalc()


  return (
    <View style={styles.calcContainer}>
        {
            (prevNumber !== '0') &&
        <Text style={styles.littleResult}>{prevNumber}</Text>
        }

        <Text style={styles.result} adjustsFontSizeToFit numberOfLines={1} >{number}</Text>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='AC' color='#9B9B9B' action={clean}/>
           <ButtonCalc  text='+/-' color='#9B9B9B' action={positiveNegative}/>
           <ButtonCalc  text='del' color='#9B9B9B' action={btnDelete}/>
           <ButtonCalc  text='/' color='#FF9427' action={dividirButton}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='7' action={displayNumbers}/>
           <ButtonCalc  text='8' action={displayNumbers}/>
           <ButtonCalc  text='9' action={displayNumbers}/>
           <ButtonCalc  text='x' color='#FF9427' action={multiplicarButton}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='6' action={displayNumbers}/>
           <ButtonCalc  text='4' action={displayNumbers}/>
           <ButtonCalc  text='5' action={displayNumbers}/>
           <ButtonCalc  text='-' color='#FF9427' action={restarButton}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='1' action={displayNumbers}/>
           <ButtonCalc  text='2' action={displayNumbers}/>
           <ButtonCalc  text='3' action={displayNumbers}/>
           <ButtonCalc  text='+' color='#FF9427' action={sumarButton}/>    
        </View>
            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='0' zeroButton={true} action={displayNumbers}/>
           <ButtonCalc  text='.' action={displayNumbers}/>
           <ButtonCalc  text='=' color='#FF9427' action={operation} />    
        </View>
    </View>
  )
};

