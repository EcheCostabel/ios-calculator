import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './appTheme';
import { ButtonCalc } from '../components/ButtonCalc';


export const CalculatorScreen = () => {


    const [ number, setNumber ] = useState('0')
    const [ prevNumber, setprevNumber ] = useState('0')


    //limpiar numeros
    const clean = () => {
         setNumber('0')
         setprevNumber('0')
    };


    //Mostrar numero en pantalla
    const displayNumbers = (numText: string) => {
        
        //No acepto doble punto
        if(number.includes('.') && numText === '.') return;

        if(number.startsWith('0') || number.startsWith('-0')) {

            //Punto decimal
            if(numText === '.') {
                setNumber(number + numText);

                //Evaluamos si es otro cero y hay un punto
            }else if (numText === '0' && number.includes('.')) {
                setNumber(number + numText)

                //Evaluamos si es diferente de cero y no tiene un punto. 
            } else if( numText !== '0' && !number.includes('.') ) {
                setNumber(numText)

                //Evitamos 000.0
            }else if(numText === '0' && !number.includes('.')) {
                setNumber(number)
            }else {
                setNumber(number + numText)
            }

        } else {
            setNumber(number + numText)
        }

        
    };


    //cambiar a positivo o negativo
    const positiveNegative = () => {
        if(number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    };


  return (
    <View style={styles.calcContainer}>
        <Text style={styles.littleResult}>{prevNumber}</Text>
        <Text style={styles.result} adjustsFontSizeToFit numberOfLines={1} >{number}</Text>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='AC' color='#9B9B9B' action={clean}/>
           <ButtonCalc  text='+/-' color='#9B9B9B' action={positiveNegative}/>
           <ButtonCalc  text='%' color='#9B9B9B' action={clean}/>
           <ButtonCalc  text='/' color='#FF9427' action={clean}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='7' action={displayNumbers}/>
           <ButtonCalc  text='8' action={displayNumbers}/>
           <ButtonCalc  text='9' action={displayNumbers}/>
           <ButtonCalc  text='x' color='#FF9427' action={clean}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='6' action={displayNumbers}/>
           <ButtonCalc  text='4' action={displayNumbers}/>
           <ButtonCalc  text='5' action={displayNumbers}/>
           <ButtonCalc  text='-' color='#FF9427' action={clean}/>    
        </View>


            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='1' action={displayNumbers}/>
           <ButtonCalc  text='2' action={displayNumbers}/>
           <ButtonCalc  text='3' action={displayNumbers}/>
           <ButtonCalc  text='+' color='#FF9427' action={clean}/>    
        </View>
            {/* FILA DE BOTONES */}
        <View style={styles.row}>
           <ButtonCalc  text='0' zeroButton={true} action={displayNumbers}/>
           <ButtonCalc  text='.' action={displayNumbers}/>
           <ButtonCalc  text='=' color='#FF9427' action={clean} />    
        </View>
    </View>
  )
};

