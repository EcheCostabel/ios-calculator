import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../screens/appTheme';

interface Props {
    text: String,
    color?: String,
    zeroButton?: boolean
}

                                    //esto quiere decir que si no me mandan el color, por defecto va a ser '#2D2D2D'
export const ButtonCalc = ({text, color = '#2D2D2D', zeroButton}: Props) => {
  return (
    <TouchableOpacity>

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
