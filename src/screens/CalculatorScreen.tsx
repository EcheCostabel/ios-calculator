import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './appTheme'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calcContainer}>
        <Text style={styles.littleResult}> 1,500.00</Text>
        <Text style={styles.result}> 1,500.00</Text>

        <View>
            <View style={styles.button}>
                <Text style={styles.textButton}>C</Text>
            </View>
        </View>
    </View>
  )
}
