import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../screens/appTheme';

interface Props {
    text: string,
    color?: string,
    zeroButton?: boolean,
    action: (numberText: string) => void
}

                                    //esto quiere decir que si no me mandan el color, por defecto va a ser '#2D2D2D'
export const ButtonCalc = ({text, color = '#2D2D2D', zeroButton, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>

    <View style={{
        ...styles.button,
        backgroundColor: color,
        width: (zeroButton) ? 180 : 80
        
    }
}>
        <Text style={{
            ...styles.textButton,
            color: (color === '#9B9B9B') ? 'black' : 'white' 
        }}>{text}</Text> 
    </View> 
        </TouchableOpacity>
  )
}
