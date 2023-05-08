import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../screens/appTheme';

interface Props {
    texto: String,
    color?: String
}


export const ButtonCalc = (props: Props) => {
  return (
    <View style={{
        ...styles.button,
        backgroundColor: props.color
    }
    }>
        <Text style={styles.textButton}>{props.texto}</Text>
    </View> 
  )
}
