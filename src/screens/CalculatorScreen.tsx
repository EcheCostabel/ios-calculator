import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './appTheme';
import { ButtonCalc } from '../components/ButtonCalc';


export const CalculatorScreen = () => {


    const [ number, setNumber ] = useState('0')
    const [ prevNumber, setprevNumber ] = useState('0')

    const limpiar = () => {
         setNumber('0')
         setprevNumber('0')
    };

    const displayNumbers = (numText: string) => {
         
        setNumber(number + numText)
        
    }


  return (
    <View style={styles.calcContainer}>
        <Text style={styles.littleResult}>{prevNumber}</Text>
        <Text style={styles.result} adjustsFontSizeToFit numberOfLines={1} > {number}</Text>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='C' color='#9B9B9B' action={limpiar}/>
           <ButtonCalc  text='+/-' color='#9B9B9B' action={limpiar}/>
           <ButtonCalc  text='del' color='#9B9B9B' action={limpiar}/>
           <ButtonCalc  text='/' color='#FF9427' action={limpiar}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='7' action={displayNumbers}/>
           <ButtonCalc  text='8' action={displayNumbers}/>
           <ButtonCalc  text='9' action={displayNumbers}/>
           <ButtonCalc  text='x' color='#FF9427' action={limpiar}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='6' action={displayNumbers}/>
           <ButtonCalc  text='4' action={displayNumbers}/>
           <ButtonCalc  text='5' action={displayNumbers}/>
           <ButtonCalc  text='-' color='#FF9427' action={limpiar}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='1' action={displayNumbers}/>
           <ButtonCalc  text='2' action={displayNumbers}/>
           <ButtonCalc  text='3' action={displayNumbers}/>
           <ButtonCalc  text='+' color='#FF9427' action={limpiar}/>    
        </View>
            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='0' zeroButton={true} action={displayNumbers}/>
           <ButtonCalc  text='.' action={displayNumbers}/>
           <ButtonCalc  text='=' color='#FF9427' action={limpiar} />    
        </View>
    </View>
  )
};

